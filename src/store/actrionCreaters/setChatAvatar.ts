const setChatAvatar = (chatId: number, avatar: string | null) => ({
  type: 'chats/SETCHATAVATAR',
  payload: {
    chatId,
    avatar,
  },
});

export default setChatAvatar;
