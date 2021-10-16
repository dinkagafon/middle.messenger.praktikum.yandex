import ChatsAPI from '../api/chats-api';
import addMessages from '../store/actrionCreaters/addMessages';
import selectActiveChat from '../store/selectors/selectActiveChat';
import selectProfile from '../store/selectors/selectProfile';
import Message from '../types/Message';
import Store from '../utils/Store';

class MessgesService {
  private sockets: {
    [key: number]: WebSocket;
  } = {};

  public async connect(chatId: number) {
    const state = Store.getState();
    const user = selectProfile(state);
    const chatsApi = new ChatsAPI();
    const { token } = await chatsApi.token(chatId);
    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${user.id}/${chatId}/${token}`);
    this.sockets[chatId] = socket;
    socket.addEventListener('message', (event) => {
      this.get(event.data);
    });
  }

  private get(data: Message) {
    Store.dispatch(addMessages(data.chat_id, [data]));
  }

  public send(message: string) {
    const state = Store.getState();
    const chat = selectActiveChat(state);
    const profile = selectProfile(state);
    if (!chat || !profile.id) {
      return;
    }
    const mes: Message = {
      chat_id: chat.id,
      type: 'message',
      time: '00:00',
      user_id: profile.id.toString(),
      content: message,
    };

    Store.dispatch(addMessages(chat.id, [mes]));
    this.sockets[chat.id].send(JSON.stringify({
      content: message,
      type: 'message',
    }));
  }
}

export default new MessgesService();
