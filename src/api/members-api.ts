import { User } from '../types/User';
import BaseAPI from '../utils/base-api';
import HTTP from '../utils/HTTP';

const membersAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/chats/users');

class MembersAPI extends BaseAPI {
  public request(chatId: number) {
    const api = new HTTP(`https://ya-praktikum.tech/api/v2/chats/${chatId}/users`);
    return api.get<Array<User>>('/');
  }

  public create(param: { userId: number, chatId: number }) {
    return membersAPIInstance.put<{ users: Array<number>, chatId: number }, string>('/', { users: [param.userId], chatId: param.chatId });
  }

  update: undefined;

  delete: undefined;
}

export default MembersAPI;
