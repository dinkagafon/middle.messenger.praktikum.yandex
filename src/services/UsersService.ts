import UsersAPI from '../api/user-api';
import setSearchUsers from '../store/actrionCreaters/setSearchUsers';
import checkChatRoot from '../store/selectors/checkChatRoot';
import selectSearchUsers from '../store/selectors/selectSearchUsers';
import Store from '../utils/Store';

class UsersService {
  private api: UsersAPI;

  constructor() {
    this.api = new UsersAPI();
  }

  public async search(login: string) {
    try {
      const state = Store.getState();
      const chatRoot = checkChatRoot(state);
      if (login.length < 3 || !chatRoot) {
        const searchUsers = selectSearchUsers(state);
        if (searchUsers.length > 0) {
          Store.dispatch(setSearchUsers([]));
        }
        return;
      }
      const users = await this.api.search(login);
      Store.dispatch(setSearchUsers(users));
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UsersService();
