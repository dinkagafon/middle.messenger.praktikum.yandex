import UsersAPI from '../api/user-api';
import clearPasswordError from '../store/actrionCreaters/clearPasswordError';
import clearProfileError from '../store/actrionCreaters/clearProfileError';
import setPasswordError from '../store/actrionCreaters/setPasswordError';
import setProfile from '../store/actrionCreaters/setProfile';
import setProfileError from '../store/actrionCreaters/setProfileError';
import setSearchUsers from '../store/actrionCreaters/setSearchUsers';
import checkChatRoot from '../store/selectors/checkChatRoot';
import selectSearchUsers from '../store/selectors/selectSearchUsers';
import { UpdateProfileUser } from '../types/User';
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
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  public async updateProfile(user: UpdateProfileUser) {
    try {
      const profile = await this.api.update(user);
      Store.dispatch(setProfile(profile));
      Store.dispatch(clearProfileError());
    } catch (error) {
      Store.dispatch(setProfileError(error));
    }
  }

  public async updatePassword(user: {
    oldPassword: string,
    newPassword: string,
  }) {
    try {
      await this.api.updatePassword(user);
      Store.dispatch(clearPasswordError());
    } catch (error) {
      Store.dispatch(setPasswordError(error));
    }
  }

  public async updateAvatar(avatarFile: File) {
    try {
      const formData = new FormData();
      formData.append('avatar', avatarFile);
      const profile = await this.api.updateAvatar(formData);
      Store.dispatch(setProfile(profile));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}

export default new UsersService();
