import axios from "axios";

//action for carbrand and caryear

export const GetCarYear = (caryear, carmake) => async (dispatch) => {
  console.log(carmake, caryear);
  try {
    dispatch({
      type: "CARYEAR_LOADING",
    });
    const res = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${carmake}/modelyear/${caryear}?format=json`
    );

    dispatch({
      type: "CARYEAR_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "CARYEAR_FAIL",
    });
  }
};
