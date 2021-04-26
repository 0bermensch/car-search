import axios from "axios";

//action for just car make input

export const GetCarMake = (carmake) => async (dispatch) => {
  try {
    dispatch({
      type: "CARMAKE_LOADING",
    });
    const res = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${carmake}?format=json`
    );

    dispatch({
      type: "CARMAKE_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "CARMAKE_FAIL",
    });
  }
};
