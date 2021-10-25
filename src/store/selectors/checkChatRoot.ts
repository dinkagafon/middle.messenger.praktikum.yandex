import Indexed from '../../types/Indexed';
import selectActiveChat from './selectActiveChat';
import selectProfile from './selectProfile';

const checkChatRoot = (state: Indexed): boolean => {
  const profile = selectProfile(state);
  const chat = selectActiveChat(state);
  return profile?.id === chat?.created_by;
};

export default checkChatRoot;
