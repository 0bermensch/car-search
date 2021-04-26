import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCarMake } from "../store/actions/CarMakeAction";
import CarCard from "./CarCard";

const CarMake = () => {
  const [carmake, setCarmake] = useState("");
  const dispatch = useDispatch();
  const carmakeList = useSelector((state) => state.CarMakeList);

  console.log(carmakeList);

  const carmakeChange = (e) => {
    setCarmake(e.target.value);
  };

  const submitChange = () => {
    dispatch(GetCarMake(carmake));
  };

  const showData = () => {
    if (carmakeList.loading) {
      return <div className="car__search__loading"></div>;
    }
    if (carmakeList.data) {
      return (
        <div className="car__search__output__container">
          {carmakeList.data.map((el) => {
            return <CarCard data={el} key={el.Model_ID} />;
          })}
        </div>
      );
    }
  };

  return (
    <div className="car__search">
      <div className="car__search__form">
        <div className="car__search__form__container">
          <label className="car__search__form__container--label">
            Car Make
          </label>
          <input
            type="text"
            onChange={carmakeChange}
            className="car__search__form__container--input"
          />
        </div>

        <button className="car__search__form--button" onClick={submitChange}>
          Submit
        </button>
      </div>
      <div className="car__search__output">
        <div className="car__search__output--title">Results</div>
        {showData()}
      </div>
    </div>
  );
};

export default CarMake;
