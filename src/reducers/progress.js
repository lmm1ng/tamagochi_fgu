const initialState = {
  status: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'TO_FEED':
      return {
        ...state,
        status: state.status + action.payload,
      };
    case 'TO_TRANSFORM':
      return {
        ...state,
        status: state.status + action.payload,
      };
    case 'TO_ZERO_HERO':
      return {
        ...state,
        status: action.payload,
      };
    case 'TO_GROW_UPPER':
      return {
        ...state,
        status: action.payload,
      };
    case 'TO_GROW_BIG':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
