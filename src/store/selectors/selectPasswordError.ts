import ApiError from '../../types/ApiError';

const selectPasswordError = (state: Indexed) => state.errors.password as ApiError | undefined;

export default selectPasswordError;
