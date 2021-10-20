import ApiError from '../../types/ApiError';

const setAuthError = (payload: ApiError) => ({
  type: 'errors/SETAUTH',
  payload,
});

export default setAuthError;
