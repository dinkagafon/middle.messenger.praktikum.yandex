import { Profile } from '../../types/User';

const setProfile = (profile: Profile) => ({
  type: 'profile/SET',
  payload: profile,
});

export default setProfile;
