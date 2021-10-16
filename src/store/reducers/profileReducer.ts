import Reducer from '../../utils/Reducer';

const profileReducer: Reducer = (
  state = undefined,
  action,
) => {
  switch (action.type) {
    case 'profile/SET':
      return action.payload;
    default:
      return state;
  }
};

export default profileReducer;
