import ApiError from '../../types/ApiError';
import Reducer from '../../utils/Reducer';

const errorsReducer: Reducer<{
  auth?: ApiError,
  reg?: ApiError,
  profile?: ApiError,
  password?: ApiError,
}> = (state = {}, action) => {
  switch (action.type) {
    case 'errors/SETAUTH':
      return { ...state, auth: action.payload };
    case 'errors/SETREG':
      return { ...state, reg: action.payload };
    case 'errors/SETPROFILE':
      return { ...state, profile: action.payload };
    case 'errors/CLEARPROFILE':
      return { ...state, profile: undefined };
    case 'errors/SETPASSWORD':
      return { ...state, password: action.payload };
    case 'errors/CLEARPASSWORD':
      return { ...state, password: undefined };

    default:
      return state;
  }
};

export default errorsReducer;
