import ChatsAPI from '../api/chats-api';
import setActiveChatId from '../store/actrionCreaters/setActiveChatId';
import setChatNamePopUpDisable from '../store/actrionCreaters/setChatNamePopUpDisable';
import setChats from '../store/actrionCreaters/setChats';
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
}

export default new ChatsService();
