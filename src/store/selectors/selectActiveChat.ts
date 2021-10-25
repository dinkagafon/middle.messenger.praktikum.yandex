import Chat from '../../types/Chat';
import Indexed from '../../types/Indexed';

const selectActiveChat = (state: Indexed): Chat | undefined => {
  // eslint-disable-next-line max-len
  const activeChat: Chat = state.chats.find((chat: Chat) => chat.id === state.currentChat.activeChatId);
  return activeChat;
};

export default selectActiveChat;
