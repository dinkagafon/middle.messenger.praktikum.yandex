import { User } from '../types/User';
import BaseAPI from '../utils/base-api';
import HTTP from '../utils/HTTP';

const userAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/user');

class UsersAPI extends BaseAPI {
  public search(login: string) {
    return userAPIInstance.post<{ login: string }, Array<User>>('/search', { login });
  }

  update: undefined;

  create: undefined;

  request: undefined;

  delete: undefined;
}

export default UsersAPI;
