import ChatsAPI from '../api/chats-api';
import setChatNamePopUpDisable from '../store/actrionCreaters/setChatNamePopUpDisable';
import setChats from '../store/actrionCreaters/setChats';
import Store from '../utils/Store';
import MembersService from './MembersService';
import MessgesService from './MessgesService';

class ChatsService {
  private api: ChatsAPI;

  constructor() {
    this.api = new ChatsAPI();
  }

  public async get() {
    try {
      const chats = await this.api.request();
      Store.dispatch(setChats(chats));
      chats.forEach((chat) => {
        MembersService.get(chat.id);
        MessgesService.connect(chat.id);
      });
    } catch (error) {
      console.log(error);
    }
  }

  public async create(data: { title: string }) {
    try {
      await this.api.create(data);
      Store.dispatch(setChatNamePopUpDisable());
      this.get();
    } catch (err) {
      console.log(err);
    }
  }
}

export default new ChatsService();
