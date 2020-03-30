import TYPES from './types';

const INITIAL_SATATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_SATATE, action) {
  switch (action.type) {
    case TYPES.USE_SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case TYPES.USE_SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        signed: true,
        loading: false,
      };
    case TYPES.USE_SIGN_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
