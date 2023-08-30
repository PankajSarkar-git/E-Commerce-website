const productReducer = (state, action) => {
  // if (action.type === "SET_LOADING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // }
  // if (action.type === "API_ERROR") {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: true,
  //   };
  // }
  // if (action.type === "SET_API_DATA") {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: false,
  //     products: action.payload,
  //   };
  // } else {
  //   return state;
  // }


switch (action.type) {
  case "SET_LOADING" :
    return {
          ...state,
          isLoading: true,
        };
    break;
  case "SET_API_DATA" :
     return {
      ...state,
      isLoading: false,
      isError: false,
      products: action.payload,
    };
    break;
  case "API_ERROR" :
    return {
          ...state,
          isLoading: false,
          isError: true,
        };
    break;

  default:
    return state;
    break;
}

};

export default productReducer;
