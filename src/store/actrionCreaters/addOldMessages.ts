import Message from '../../types/Message';

const addOldMessages = (chatId: number, messages: Array<Message>) => ({
  type: 'chats/ADDOLDMESSAGES',
  payload: {
    chatId,
    messages,
  },
});

export default addOldMessages;
