import LoginRequest from '../types/LoginRequest';
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

  create: undefined;

  request: undefined;

  update: undefined;

  delete: undefined;
}

export default AuthAPI;
