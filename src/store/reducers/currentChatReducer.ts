import Reducer from '../../utils/Reducer';

const currentChatReducer: Reducer<{ id: number | undefined }> = (
  state = { id: undefined },
  action,
) => {
  switch (action.type) {
    case 'currentChat/SETACTIVECHATID':
      return { ...state, activeChatId: action.payload };
    default:
      return state;
  }
};

export default currentChatReducer;
