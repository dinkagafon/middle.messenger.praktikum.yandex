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
    case 'chats/ADDMESSAGES':
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
    default:
      return state;
  }
};

export default chatsReducer;
