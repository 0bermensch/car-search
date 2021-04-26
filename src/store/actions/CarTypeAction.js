import axios from "axios";

//action for carbrand and cartype

export const GetCarType = (cartype, carmake) => async (dispatch) => {
  console.log(carmake, cartype);
  try {
    dispatch({
      type: "CARTYPE_LOADING",
    });
    const res = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${carmake}/vehicletype/${cartype}?format=json`
    );

    dispatch({
      type: "CARTYPE_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "CARTYPE_FAIL",
    });
  }
};
