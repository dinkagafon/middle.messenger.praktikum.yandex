import Chat from '../../types/Chat';

const setChats = (chats: Array<Chat>) => ({
  type: 'chats/SET',
  payload: chats,
});

export default setChats;
