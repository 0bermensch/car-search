const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const CarYearReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "CARYEAR_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "CARYEAR_FAIL":
      return {
        ...state,
        loading: true,
        errorMsg: "Unable to get car year",
      };
    case "CARYEAR_SUCCESS":
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

export default CarYearReducer;
