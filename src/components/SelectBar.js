import React, { useState } from "react";
import CarMake from "./CarMake";
import CarType from "./CarType";
import CarYear from "./CarYear";
import CarAll from "./CarAll";

const SearchBar = () => {
  const [carmakeDisplay, setCarmakeDisplay] = useState(false);
  const [cartypeDisplay, setCartypeDisplay] = useState(false);
  const [caryearDisplay, setCaryearDisplay] = useState(false);
  const [carallDisplay, setCarallDisplay] = useState(false);

  const showCarmake = () => {
    setCarmakeDisplay(true);
    setCartypeDisplay(false);
    setCaryearDisplay(false);
    setCarallDisplay(false);
  };
  const showCartype = () => {
    setCarmakeDisplay(false);
    setCartypeDisplay(true);
    setCaryearDisplay(false);
    setCarallDisplay(false);
  };
  const showCaryear = () => {
    setCarmakeDisplay(false);
    setCartypeDisplay(false);
    setCaryearDisplay(true);
    setCarallDisplay(false);
  };
  const showCarall = () => {
    setCarmakeDisplay(false);
    setCartypeDisplay(false);
    setCaryearDisplay(false);
    setCarallDisplay(true);
  };
  console.log(carmakeDisplay);

  return (
    <div className="car">
      <div className="car--title">
        Search for your car by 4 different search filters
      </div>
      <div className="car__select">
        <button className="car__select--button" onClick={showCarmake}>
          Search By Car Make
        </button>
        <button className="car__select--button" onClick={showCartype}>
          Search By Car Type
        </button>
        <button className="car__select--button" onClick={showCaryear}>
          Search By Car Year
        </button>
        <button className="car__select--button" onClick={showCarall}>
          Search By All
        </button>
      </div>
      {carmakeDisplay && <CarMake />}
      {cartypeDisplay && <CarType />}
      {caryearDisplay && <CarYear />}
      {carallDisplay && <CarAll />}
    </div>
  );
};

export default SearchBar;
