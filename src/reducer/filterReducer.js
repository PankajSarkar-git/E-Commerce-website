const filterReducer = (state, action) => {
  // filter state Update
  if (action.type === "LOAD_FILTER_PRODUCTS") {
    return {
      ...state,
      filter_products: [...action.payload],
      all_products: [...action.payload],
    };
  }
  // grid
  if (action.type === "SET_GRID_VIWE") {
    return {
      ...state,
      grid_viwe: true,
    };
  }
  // list
  if (action.type === "SET_List_VIWE") {
    return {
      ...state,
      grid_viwe: false,
    };
  }

  // sort value
  if (action.type === "GET_SHORT_VALUE") {
    return {
      ...state,
      sorting_product: action.payload,
    };
  }

  // sort product

  if (action.type === "SHORTING_PRODUCTS") {
    let sortNewData;
    const { filter_products, sorting_product } = state;
    let productCopy = [...filter_products];

    const priceSort = (a, b) => {
      if (sorting_product === "a-z") {
        return a.title.localeCompare(b.title);
      }
      if (sorting_product === "z-a") {
        return b.title.localeCompare(a.title);
      }
      if (sorting_product === "lowToHingh") {
        return a.price - b.price;
      }
      if (sorting_product === "highToLow") {
        return b.price - a.price;
      }
    };
    sortNewData = productCopy.sort(priceSort);

    return {
      ...state,
      filter_products: sortNewData,
    };
  }

  // filter scerch

  if (action.type === "UPDATE_FILTER_VALUE") {
    const { name, value } = action.payload;
    return {
      ...state,
      filters:{
        ...state.filters,
        [name] :value,
      }
    };
  }
  if (action.type === "UPDATE_FILTERS_PRODUCTS") {
    const {all_products} = state;
    let copyProducts = [...all_products];
    const {text} = state.filters;
    if (text) {
      copyProducts = copyProducts.filter((curelm )=>{
        return curelm.title.toLowerCase().includes(text) 
      })
    }
    return{
      ...state,
      filter_products:copyProducts,
    }
    
  }
  return state;
};

export default filterReducer;
