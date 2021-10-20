import ApiError from '../../types/ApiError';

const setPasswordError = (payload: ApiError) => ({
  type: 'errors/SETPASSWORD',
  payload,
});

export default setPasswordError;
