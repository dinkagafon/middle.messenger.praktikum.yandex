import Message from '../../types/Message';

const addMessages = (chatId: number, messages: Array<Message>) => ({
  type: 'chats/ADDMESSAGES',
  payload: {
    chatId,
    messages,
  },
});

export default addMessages;
