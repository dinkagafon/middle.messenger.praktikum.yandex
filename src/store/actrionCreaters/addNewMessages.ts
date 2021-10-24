import Message from '../../types/Message';

const addNewMessages = (chatId: number, messages: Array<Message>) => ({
  type: 'chats/ADDNEWMESSAGES',
  payload: {
    chatId,
    messages,
  },
});

export default addNewMessages;
