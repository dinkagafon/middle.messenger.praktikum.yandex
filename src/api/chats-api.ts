import Chat from '../pages/chat';
import BaseAPI from '../utils/base-api';
import HTTP from '../utils/HTTP';

const chatsAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/chats');

class ChatsAPI extends BaseAPI {
  public request() {
    return chatsAPIInstance.get<Array<Chat>>('/');
  }

  public create(data: {title: string}) {
    return chatsAPIInstance.post<{title: string}, {id: number}>('/', data)
  }

  update: undefined;

  delete: undefined;
}

export default ChatsAPI;
