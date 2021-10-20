import LoginRequest from '../types/LoginRequest';
import { Profile, RegUser } from '../types/User';
import BaseAPI from '../utils/base-api';
import HTTP from '../utils/HTTP';

const authAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/auth');

class AuthAPI extends BaseAPI {
  public login(user: LoginRequest) {
    return authAPIInstance.post<LoginRequest, void>('/signin', user);
  }

  public logout() {
    return authAPIInstance.post<void, void>('/logout');
  }

  public create(user: RegUser) {
    return authAPIInstance.post<RegUser, { id: number }>('/signup', user);
  }

  public request() {
    return authAPIInstance.get<Profile>('/user');
  }

  update: undefined;

  delete: undefined;
}

export default AuthAPI;
