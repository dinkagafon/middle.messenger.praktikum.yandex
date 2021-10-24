import { User } from '../../types/User';

const setSearchUsers = (users: Array<User>) => ({
  type: 'searchUsers/SETUSERS',
  payload: users,
});

export default setSearchUsers;
