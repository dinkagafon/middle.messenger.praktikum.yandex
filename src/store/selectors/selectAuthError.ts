import ApiError from '../../types/ApiError';
import Indexed from '../../types/Indexed';

const selectAuthError = (state: Indexed) => state.errors.auth as ApiError | undefined;

export default selectAuthError;
