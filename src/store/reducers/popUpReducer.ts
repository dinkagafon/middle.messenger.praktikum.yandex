import Reducer from '../../utils/Reducer';

const popUpReducer: Reducer<{ [index: string]: boolean }> = (
  state = { chatSetting: false, chatName: false },
  action,
) => {
  switch (action.type) {
    case 'popUp/SETCHATSETTINGACTIVE':
      return { ...state, chatSetting: true };
    case 'popUp/SETCHATSETTINGDISABLE':
      return { ...state, chatSetting: false };
    case 'popUp/SETCHATNAMEACTIVE':
      return { ...state, chatName: true };
    case 'popUp/SETCHATNAMEDISABLE':
      return { ...state, chatName: false };
    case 'popUp/CLOSEALL':
      return Object.keys(state).reduce((res: { [index: string]: boolean }, key) => ({
        ...res,
        [key]: false,
      }), {});
    default:
      return state;
  }
};

export default popUpReducer;
