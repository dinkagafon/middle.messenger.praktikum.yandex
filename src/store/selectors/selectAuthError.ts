import ApiError from '../../types/ApiError';

const selectAuthError = (state: Indexed) => state.errors.auth as ApiError | undefined;

export default selectAuthError;
