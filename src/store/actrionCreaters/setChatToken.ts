const setChatToken = (chatId: number, token: string) => ({
  type: 'chats/SETCHATTOKEN',
  payload: {
    chatId,
    token,
  },
});

export default setChatToken;
