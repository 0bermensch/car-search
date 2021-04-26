import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCarAll } from "../store/actions/CarAllAction";
import CarCard from "./CarCard";

const CarAll = () => {
  const [carmake, setCarmake] = useState("");
  const [cartype, setCartype] = useState("");
  const [caryear, setCaryear] = useState(1981);
  const dispatch = useDispatch();
  const carallList = useSelector((state) => state.CarAllList);

  // console.log(caryear);

  console.log(carallList);

  const carmakeChange = (e) => {
    setCarmake(e.target.value);
  };

  const cartypeChange = (e) => {
    setCartype(e.target.value);
  };

  const caryearChange = (e) => {
    setCaryear(e.target.value);
  };

  const submitChange = () => {
    dispatch(GetCarAll(caryear, cartype, carmake));
  };

  const showData = () => {
    if (carallList.loading) {
      return <div className="car__search__loading"></div>;
    }
    if (carallList.data) {
      return (
        <div className="car__search__output__container">
          {carallList.data.map((el) => {
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
            Car Brand
          </label>
          <input
            type="text"
            onChange={carmakeChange}
            className="car__search__form__container--input"
          />
        </div>
        <div className="car__search__form__container">
          <label className="car__search__form__container--label">
            Car Type
          </label>
          <input
            type="text"
            onChange={cartypeChange}
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

export default CarAll;
