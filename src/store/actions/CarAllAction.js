import axios from "axios";

//action for carbrand and caryear

export const GetCarAll = (caryear, cartype, carmake) => async (dispatch) => {
  console.log(caryear);

  try {
    dispatch({
      type: "CARALL_LOADING",
    });
    const res = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${carmake}/modelyear/${caryear}/vehicletype/${cartype}?format=json`
    );

    dispatch({
      type: "CARALL_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "CARALL_FAIL",
    });
  }
};
