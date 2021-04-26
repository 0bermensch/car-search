import React from "react";

const CarCard = ({ data }) => {
  return (
    <div className="car__search__output__container__card">
      <div className="car__search__output__container__card--name">
        {data.Make_Name}
      </div>
      <div className="car__search__output__container__card--model">
        Model: {data.Model_Name}
      </div>
    </div>
  );
};

export default CarCard;
