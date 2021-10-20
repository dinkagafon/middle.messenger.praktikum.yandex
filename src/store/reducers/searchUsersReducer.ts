import { User } from '../../types/User';
import Reducer from '../../utils/Reducer';

const searchUsersReducer: Reducer<Array<User>> = (
  state = [],
  action,
) => {
  switch (action.type) {
    case 'searchUsers/SETUSERS':
      return action.payload;
    default:
      return state;
  }
};

export default searchUsersReducer;
