import ApiError from '../../types/ApiError';
import Indexed from '../../types/Indexed';

const selectRegError = (state: Indexed) => state.errors.reg as ApiError | undefined;

export default selectRegError;
