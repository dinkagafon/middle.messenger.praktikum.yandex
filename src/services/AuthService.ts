import AuthAPI from '../api/auth-api';
import setProfile from '../store/actrionCreaters/setProfile';
import LoginRequest from '../types/LoginRequest';
import { RegUser } from '../types/User';
import Router from '../utils/Router';
import Store from '../utils/Store';

class AuthService {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  public async login(data: LoginRequest) {
    try {
      await this.api.login(data);
      (new Router()).go('/');
    } catch (error) {
      console.log(error);
    }
  }

  public async logout() {
    try {
      await this.api.logout();
      (new Router()).go('/auth');
    } catch (err) {
      console.log(err);
    }
  }

  public async reg(data: RegUser) {
    try {
      await this.api.create(data);
      (new Router()).go('/');
    } catch (err) {
      console.log(err);
    }
  }

  public async getProfile() {
    try {
      const user = await this.api.request();
      Store.dispatch(setProfile(user));
    } catch (err) {
      (new Router()).go('/auth');
    }
  }
}

export default new AuthService();
