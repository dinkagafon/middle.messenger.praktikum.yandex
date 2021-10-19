import { Profile } from '../../types/User';

const selectProfile = (state: Indexed) => state.profile as Profile | undefined;

export default selectProfile;
