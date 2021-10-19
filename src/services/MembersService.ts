import MembersAPI from '../api/members-api';
import setChatSettingsPopUpActive from '../store/actrionCreaters/setChatSettingsPopUpActive';
import setMembers from '../store/actrionCreaters/setMembers';
import selectActiveChat from '../store/selectors/selectActiveChat';
import Store from '../utils/Store';

class MembersService {
  private api: MembersAPI;

  constructor() {
    this.api = new MembersAPI();
  }

  public openMembersPopUp() {
    Store.dispatch(setChatSettingsPopUpActive());
    const activeChat = selectActiveChat(Store.getState());
    if (!activeChat) {
      return;
    }
    this.get(activeChat.id);
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

  public async delete(userId: number) {
    try {
      const chat = selectActiveChat(Store.getState());
      if (!chat) {
        return;
      }
      await this.api.delete({ userId, chatId: chat.id });
      this.get(chat.id);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MembersService();
