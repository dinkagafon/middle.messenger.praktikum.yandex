import Chat from '../../types/Chat';
import Reducer from '../../utils/Reducer';

const chatsReducer: Reducer<Array<Chat>> = (state = [], action) => {
  switch (action.type) {
    case 'chats/SET':
      return action.payload;
    case 'chats/SETMEMBERS':
      return state.map((chat: Chat) => {
        if (chat.id === action.payload.chatId) {
          return {
            ...chat,
            members: action.payload.members,
          };
        }
        return { ...chat };
      });
    case 'chats/ADDNEWMESSAGES':
      return state.map((chat: Chat) => {
        if (chat.id === action.payload.chatId) {
          return {
            ...chat,
            messages: chat.messages
              ? action.payload.messages.concat(chat.messages)
              : action.payload.messages,
          };
        }
        return { ...chat };
      });
    case 'chats/ADDOLDMESSAGES':
      return state.map((chat: Chat) => {
        if (chat.id === action.payload.chatId) {
          return {
            ...chat,
            messages: chat.messages
              ? chat.messages.concat(action.payload.messages)
              : action.payload.messages,
          };
        }
        return { ...chat };
      });
    case 'chats/SETCHATAVATAR':
      return state.map((chat: Chat) => {
        if (chat.id === action.payload.chatId) {
          return {
            ...chat,
            avatar: action.payload.avatar,
          };
        }
        return { ...chat };
      });
    default:
      return state;
  }
};

export default chatsReducer;
