import UsersAPI from '../api/user-api';
import setSearchUsers from '../store/actrionCreaters/setSearchUsers';
import Store from '../utils/Store';

class UsersService {
  private api: UsersAPI;

  constructor() {
    this.api = new UsersAPI();
  }

  public async search(login: string) {
    try {
      if (login.length < 3) {
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
