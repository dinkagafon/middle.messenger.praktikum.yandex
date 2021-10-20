import ApiError from '../../types/ApiError';

const selectRegError = (state: Indexed) => state.errors.reg as ApiError | undefined;

export default selectRegError;
