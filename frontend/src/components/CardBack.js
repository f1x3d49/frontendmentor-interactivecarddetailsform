import React from "react";
import cardback from "../images/bg-card-back.png";

const CardBack = () => {
  return (
    <article className="absolute w-96 h-48 inset-x-80 inset-y-96">
      <img src={cardback} alt="Back Card" className="object-cover" />
      <h2 className="absolute text-white text-sm top-[94px] left-[310px]">
        000
      </h2>
    </article>
  );
};

export default CardBack;
