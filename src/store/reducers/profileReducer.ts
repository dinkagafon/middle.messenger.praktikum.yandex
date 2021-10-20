import { Profile } from '../../types/User';
import Reducer from '../../utils/Reducer';

const profileReducer: Reducer<Profile | undefined> = (
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
