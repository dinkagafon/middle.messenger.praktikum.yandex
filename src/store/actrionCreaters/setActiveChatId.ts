const setActiveChatId = (id: number) => ({
  type: 'currentChat/SETACTIVECHATID',
  payload: id,
});

export default setActiveChatId;
