import { Profile, UpdateProfileUser, User } from '../types/User';
import BaseAPI from '../utils/base-api';
import HTTP from '../utils/HTTP';

const userAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/user');

class UsersAPI extends BaseAPI {
  public search(login: string) {
    return userAPIInstance.post<{ login: string }, Array<User>>('/search', { login });
  }

  public update(user: UpdateProfileUser) {
    return userAPIInstance.put<UpdateProfileUser, Profile>('/profile', user);
  }

  public updatePassword(pass: {
    oldPassword: string,
    newPassword: string,
  }) {
    return userAPIInstance.put<{
      oldPassword: string,
      newPassword: string,
    }, string>('/password', pass);
  }

  public updateAvatar(formData: FormData) {
    return userAPIInstance.put<FormData, Profile>('/profile/avatar', formData);
  }

  create: undefined;

  request: undefined;

  delete: undefined;
}

export default UsersAPI;
