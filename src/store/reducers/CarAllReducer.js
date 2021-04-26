const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const CarAllReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "CARALL_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "CARALL_FAIL":
      return {
        ...state,
        loading: true,
        errorMsg: "Unable to get car",
      };
    case "CARALL_SUCCESS":
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

export default CarAllReducer;
