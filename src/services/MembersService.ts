import MembersAPI from '../api/members-api';
import setMembers from '../store/actrionCreaters/setMembers';
import selectActiveChat from '../store/selectors/selectActiveChat';
import Store from '../utils/Store';

class MembersService {
  private api: MembersAPI;

  constructor() {
    this.api = new MembersAPI();
  }

  public async get(chatId: number) {
    try {
      const members = await this.api.request(chatId);
      Store.dispatch(setMembers({ chatId, members }));
    } catch (error) {
      console.log(error);
    }
  }

  public async add(userId: number) {
    try {
      const chat = selectActiveChat(Store.getState());
      if (!chat) {
        return;
      }
      await this.api.create({ userId, chatId: chat.id });
      this.get(chat.id);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MembersService();
