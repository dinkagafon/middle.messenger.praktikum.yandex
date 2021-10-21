import ChatsAPI from '../api/chats-api';
import setActiveChatId from '../store/actrionCreaters/setActiveChatId';
import setChatAvatar from '../store/actrionCreaters/setChatAvatar';
import setChatNamePopUpDisable from '../store/actrionCreaters/setChatNamePopUpDisable';
import setChats from '../store/actrionCreaters/setChats';
import checkChatRoot from '../store/selectors/checkChatRoot';
import selectActiveChat from '../store/selectors/selectActiveChat';
import selectChat from '../store/selectors/selectChat';
import Store from '../utils/Store';
import MessagesService from './MessagesService';

class ChatsService {
  private api: ChatsAPI;

  constructor() {
    this.api = new ChatsAPI();
  }

  public async init() {
    try {
      const chats = await this.api.request();
      Store.dispatch(setChats(chats));
      chats.forEach((chat) => {
        MessagesService.connect(chat.id);
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  public async get(chatId: number) {
    Store.dispatch(setActiveChatId(chatId));
    const state = Store.getState();
    const chat = selectChat(state, chatId);
    if (!chat) {
      return;
    }
    if (!chat.messages || chat.messages.length < 20) {
      const offset = chat.messages ? chat.messages.length : 0;
      MessagesService.getlastMessages(chatId, offset);
    }
  }

  public async create(data: { title: string }) {
    try {
      await this.api.create(data);
      Store.dispatch(setChatNamePopUpDisable());
      this.init();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  public async updateAvatar(avatarFile: File) {
    try {
      const state = Store.getState();
      const chat = selectActiveChat(state);
      if (!chat) {
        return;
      }
      const chatRoot = checkChatRoot(state);
      if (!chatRoot) {
        return;
      }
      const formData = new FormData();
      formData.append('avatar', avatarFile);
      formData.append('chatId', chat.id.toString());
      const newChat = await this.api.updateAvatar(formData);
      Store.dispatch(setChatAvatar(chat.id, newChat.avatar));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}

export default new ChatsService();
