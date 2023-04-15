import React from "react";
import cardfront from "../images/bg-card-front.png";

const CardFront = () => {
  return (
    <article className="absolute w-96 h-48 inset-x-60 inset-y-36">
      <img src={cardfront} alt="front-card" className="object-cover" />
      <div className="flex gap-3 absolute top-5 left-5 items-center">
        <div className="w-10 h-10 bg-swhite rounded-full"></div>
        <div className="w-5 h-5 rounded-full border border-swhite"></div>
      </div>
    </article>
  );
};

export default CardFront;
