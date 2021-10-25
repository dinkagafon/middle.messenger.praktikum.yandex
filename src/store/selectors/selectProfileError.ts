import ApiError from '../../types/ApiError';
import Indexed from '../../types/Indexed';

const selectProfileError = (state: Indexed) => state.errors.profile as ApiError | undefined;

export default selectProfileError;
