import Message from '../../types/Message';
import selectActiveChat from './selectActiveChat';

const selectMessages = (state: Indexed): Array<Message> | undefined => {
  const activeChat = selectActiveChat(state);
  if (!activeChat) {
    return [];
  }
  return activeChat.messages;
};

export default selectMessages;
