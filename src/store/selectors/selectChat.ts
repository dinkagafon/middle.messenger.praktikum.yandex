import Chat from '../../types/Chat';

const selectChat = (state: Indexed, chatId: number): Chat | undefined => {
  const c: Chat = state.chats.find((chat: Chat) => chat.id === chatId);
  return c;
};

export default selectChat;
