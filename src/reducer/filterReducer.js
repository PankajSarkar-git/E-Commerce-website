const filterReducer = (state, action) => {

  if (action.type === "LOAD_FILTER_PRODUCTS") {
    return {
      ...state,
      filter_products : [...action.payload],
      all_products: [...action.payload]
    }
  }
  return state

}

export default filterReducer;