import React, { useContext } from "react";
import cardfront from "../images/bg-card-front.png";
import { DataContext } from "../context/DataContext";

const CardFront = () => {
  const [details, setDetails] = useContext(DataContext);

  const getDate = (month, year) => {
    if (month && year) return `${month}/${year}`;
    else if (!month) return `00/00`;
    else if (year) return `00/${year}`;
    else if (!year) return `00/00`;
    else if (month) return `${month}/${year}`;
  };

  return (
    <article className="absolute w-96 h-48 md:inset-x-60 md:inset-y-36 sm:z-20 sm:top-[150px] sm:left-[280px]">
      <img src={cardfront} alt="front-card" className="object-cover" />
      <div className="flex gap-3 absolute top-5 left-5 items-center">
        <div className="w-10 h-10 bg-swhite rounded-full"></div>
        <div className="w-5 h-5 rounded-full border border-swhite"></div>
      </div>
      <div className="absolute w-full h-auto top-32 px-8 flex flex-col gap-3 text-white font-main">
        <h1 className="w-auto text-2xl tracking-widest ">
          {details.number ? details.number : "0000 0000 0000 0000"}
        </h1>
        <div className="flex justify-between text-sm">
          <h2>{details.name ? details.name : "JANE APPLESEED"}</h2>
          <h2>{getDate(details.month, details.year)}</h2>
        </div>
      </div>
    </article>
  );
};

export default CardFront;
