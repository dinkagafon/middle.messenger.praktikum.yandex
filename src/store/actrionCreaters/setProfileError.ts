import ApiError from '../../types/ApiError';

const setProfileError = (payload: ApiError) => ({
  type: 'errors/SETPROFILE',
  payload,
});

export default setProfileError;
