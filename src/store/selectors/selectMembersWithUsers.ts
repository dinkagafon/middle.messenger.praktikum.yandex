import { User } from '../../types/User';
import selectActiveChat from './selectActiveChat';
import selectSearchUsers from './selectSearchUsers';

function selectMembersWithUsers(state: Indexed): Array<User> {
  const activeChat = selectActiveChat(state);
  if (!activeChat) {
    return [];
  }
  const searchUsers = selectSearchUsers(state);
  const members = activeChat.members || [];
  const users = members.concat(searchUsers) as Array<User>;
  return users;
}

export default selectMembersWithUsers;
