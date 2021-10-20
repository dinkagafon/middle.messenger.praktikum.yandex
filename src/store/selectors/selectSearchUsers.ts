import { User } from '../../types/User';

const selectSearchUsers = (state: Indexed) => state.searchUsers as Array<User>;

export default selectSearchUsers;
