import { User } from '../../types/User';

const setMembers = (payload: { chatId: number, members: Array<User> }) => ({
  type: 'chats/SETMEMBERS',
  payload,
});

export default setMembers;
