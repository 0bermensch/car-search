const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const CarMakeReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "CARMAKE_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "CARMAKE_FAIL":
      return {
        ...state,
        loading: true,
        errorMsg: "Unable to get car make",
      };
    case "CARMAKE_SUCCESS":
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

export default CarMakeReducer;
