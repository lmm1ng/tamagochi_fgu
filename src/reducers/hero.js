const initialState = {
  srcImage: 'images/static/static.png',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ANIMATE_FEED':
      return {
        ...state,
        srcImage: action.payload,
      };
    case 'ANIMATE_TRANSFORM':
      return {
        ...state,
        srcImage: action.payload,
      };
      case 'GO_KID':
      return {
        ...state,
        srcImage: action.payload,
      };
      case 'GO_OVER_KID':
      return {
        ...state,
        srcImage: action.payload,
      };
      case 'GO_BIG_KID':
      return {
        ...state,
        srcImage: action.payload,
      };

    default:
      return state;
  }
};
