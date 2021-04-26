import { combineReducers } from "redux";
import CarAllReducer from "./CarAllReducer";
import CarMakeReducer from "./CarMakeReducer";
import CarTypeReducer from "./CarTypeReducer";
import CarYearReducer from "./CarYearReducer";

const RootReducer = combineReducers({
  CarAllList: CarAllReducer,
  CarMakeList: CarMakeReducer,
  CarTypeList: CarTypeReducer,
  CarYearList: CarYearReducer,
});

export default RootReducer;
