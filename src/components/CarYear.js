import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCarYear } from "../store/actions/CarYearAction";
import CarCard from "./CarCard";

const CarYear = () => {
  const [carmake, setCarmake] = useState("");
  const [caryear, setCaryear] = useState(1981);
  const dispatch = useDispatch();
  const caryearList = useSelector((state) => state.CarYearList);

  console.log(caryearList);

  const carmakeChange = (e) => {
    setCarmake(e.target.value);
  };

  const caryearChange = (e) => {
    setCaryear(e.target.value);
  };

  const submitChange = () => {
    dispatch(GetCarYear(caryear, carmake));
  };

  const showData = () => {
    if (caryearList.loading) {
      return <div className="car__search__loading"></div>;
    }
    if (caryearList.data) {
      return (
        <div className="car__search__output__container">
          {caryearList.data.map((el) => {
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
        <div className="car__search__form__container">
          <label className="car__search__form__container--label">
            Car Year
          </label>
          <input
            type="range"
            min={1981}
            max={2021}
            onChange={caryearChange}
            className="car__search__form__container--input"
          />
          <div className="car__search__form--input--display">{caryear}</div>
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

export default CarYear;
