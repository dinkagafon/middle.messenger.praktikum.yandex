import { User } from '../../types/User';

const setProfile = (profile: User) => ({
  type: 'profile/SET',
  payload: profile,
});

export default setProfile;
