import ChatsAPI from '../api/chats-api';
import addNewMessages from '../store/actrionCreaters/addNewMessages';
import addOldMessages from '../store/actrionCreaters/addOldMessages';
import selectActiveChat from '../store/selectors/selectActiveChat';
import selectProfile from '../store/selectors/selectProfile';
import Message from '../types/Message';
import Store from '../utils/Store';

class MessagesService {
  private sockets: {
    [key: number]: WebSocket;
  } = {};

  public async connect(chatId: number) {
    const state = Store.getState();
    const profile = selectProfile(state);
    if (!profile) {
      return;
    }
    const chatsApi = new ChatsAPI();
    const { token } = await chatsApi.token(chatId);
    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${profile.id}/${chatId}/${token}`);
    this.sockets[chatId] = socket;
    socket.addEventListener('message', (event) => {
      this.get(event.data, chatId);
    });
  }

  private async get(data: string, chat_id: number) {
    const result: Message = await JSON.parse(data);
    if (result.type === 'message') {
      Store.dispatch(addNewMessages(chat_id, [result]));
    }
    if (Array.isArray(result)) {
      Store.dispatch(addOldMessages(chat_id, result));
    }
  }

  public send(message: string) {
    if (!message) {
      return;
    }
    const state = Store.getState();
    const chat = selectActiveChat(state);
    if (!chat) {
      return;
    }
    this.sockets[chat.id].send(JSON.stringify({
      content: message,
      type: 'message',
    }));
  }

  public async getlastMessages(chatId: number, offset: number = 0) {
    this.sockets[chatId].send(JSON.stringify({
      content: offset,
      type: 'get old',
    }));
  }
}

export default new MessagesService();
