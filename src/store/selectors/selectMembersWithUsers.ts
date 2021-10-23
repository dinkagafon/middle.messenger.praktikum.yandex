import Indexed from '../../types/Indexed';
import { Member } from '../../types/User';
import selectActiveChat from './selectActiveChat';
import selectSearchUsers from './selectSearchUsers';

function selectMembersWithUsers(state: Indexed): Array<Member> {
  const activeChat = selectActiveChat(state);
  if (!activeChat) {
    return [];
  }
  const members = activeChat.members || [];
  const membersId = members.map((mem) => mem.id);
  const searchUsers = selectSearchUsers(state);
  const searchMembers: Array<Member> = searchUsers
    .filter((user) => {
      if (membersId.includes(user.id)) {
        return false;
      }
      return true;
    })
    .map((user) => ({ ...user, role: 'none' }));
  const users = members.concat(searchMembers);
  return users;
}

export default selectMembersWithUsers;
