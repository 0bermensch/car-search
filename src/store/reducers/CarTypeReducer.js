const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const CarTypeReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "CARTYPE_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "CARTYPE_FAIL":
      return {
        ...state,
        loading: true,
        errorMsg: "Unable to get car type",
      };
    case "CARTYPE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.Results,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default CarTypeReducer;
