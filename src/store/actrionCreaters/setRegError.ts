import ApiError from '../../types/ApiError';

const setRegError = (payload: ApiError) => ({
  type: 'errors/SETREG',
  payload,
});

export default setRegError;
