import ChatsAPI from '../api/chats-api';
import setChats from '../store/actrionCreaters/setChats';
import Store from '../utils/Store';

class ChatsService {
  private api: ChatsAPI;

  constructor() {
    this.api = new ChatsAPI();
  }

  public async get() {
    try {
      const chats = await this.api.request()   
      Store.dispatch(setChats(chats))
    } catch (error) {
      console.log(error);
    }
  }

  public async create(data: {title: string}) {
    try {
      await this.api.create(data)
      this.get()
    } catch (err) {
      console.log(err)
    }
  }
}

export default new ChatsService;
