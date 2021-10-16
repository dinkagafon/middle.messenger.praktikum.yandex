import { User } from '../../types/User';

const selectProfile = (state: Indexed) => state.profile as User;

export default selectProfile;
