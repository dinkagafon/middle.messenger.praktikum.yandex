import ApiError from '../../types/ApiError';

const selectProfileError = (state: Indexed) => state.errors.profile as ApiError | undefined;

export default selectProfileError;
