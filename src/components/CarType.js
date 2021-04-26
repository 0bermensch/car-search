import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCarType } from "../store/actions/CarTypeAction";
import CarCard from "./CarCard";

const CarType = () => {
  const [carmake, setCarmake] = useState("");
  const [cartype, setCartype] = useState("");
  const dispatch = useDispatch();
  const cartypeList = useSelector((state) => state.CarTypeList);

  console.log(cartypeList);

  const carmakeChange = (e) => {
    setCarmake(e.target.value);
  };

  const cartypeChange = (e) => {
    setCartype(e.target.value);
  };

  const submitChange = () => {
    dispatch(GetCarType(carmake, cartype));
  };

  const showData = () => {
    if (cartypeList.loading) {
      return <div className="car__search__loading"></div>;
    }
    if (cartypeList.data) {
      return (
        <div className="car__search__output__container">
          {cartypeList.data.map((el) => {
            return <CarCard data={el} key={el.Model_ID} />;
          })}
        </div>
      );
    }
    if (cartypeList.errorMsg) {
      return <div className="car__search--error">{cartypeList.errorMsg}</div>;
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
            onChange={cartypeChange}
            className="car__search__form__container--input"
          />
        </div>
        <div className="car__search__form__container">
          <label className="car__search__form__container--label">
            Car Type
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

export default CarType;
