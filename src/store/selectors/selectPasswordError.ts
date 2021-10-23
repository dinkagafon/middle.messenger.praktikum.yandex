import ApiError from '../../types/ApiError';
import Indexed from '../../types/Indexed';

const selectPasswordError = (state: Indexed) => state.errors.password as ApiError | undefined;

export default selectPasswordError;
