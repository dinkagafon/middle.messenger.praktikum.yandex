import Chat from '../types/Chat';
import BaseAPI from '../utils/base-api';
import HTTP from '../utils/HTTP';

const chatsAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/chats');

class ChatsAPI extends BaseAPI {
  public request() {
    return chatsAPIInstance.get<Array<Chat>>('/');
  }

  public create(data: { title: string }) {
    return chatsAPIInstance.post<{ title: string }, { id: number }>('/', data);
  }

  public token(chatId: number) {
    return chatsAPIInstance.post<undefined, { token: string }>(`/token/${chatId}`);
  }

  public updateAvatar(formData: FormData) {
    const api = new HTTP('https://ya-praktikum.tech/api/v2/chats', { formData: true });
    return api.put<FormData, Chat>('/avatar', formData);
  }

  update: undefined;

  delete: undefined;
}

export default ChatsAPI;
