import AuthAPI from '../api/auth-api';
import setAuthError from '../store/actrionCreaters/setAuthError';
import setProfile from '../store/actrionCreaters/setProfile';
import setRegError from '../store/actrionCreaters/setRegError';
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
      Store.dispatch(setAuthError(error));
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
    } catch (error) {
      Store.dispatch(setRegError(error));
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

  public async checkNotAuth() {
    const user = await this.api.request();
    (new Router()).go('/');
    Store.dispatch(setProfile(user));
  }
}

export default new AuthService();
