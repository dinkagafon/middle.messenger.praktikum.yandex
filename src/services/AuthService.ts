import AuthAPI from '../api/auth-api';
import LoginRequest from '../types/LoginRequest';
import { UserForReg } from '../types/User';
import Router from '../utils/Router';

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

  public async reg(data: UserForReg) {
    try {
      await this.api.create(data);

    } catch (err) {
      console.log(err)
    }
  }
}

export default AuthService;
