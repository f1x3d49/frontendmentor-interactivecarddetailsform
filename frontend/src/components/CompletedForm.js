import React, { useContext } from "react";
import { SubmitContext } from "../context/SubmitContext";
import Completed from "../images/icon-complete.svg";

const CompletedForm = () => {
  const [hidden, setHidden] = useContext(SubmitContext);
  const reload = () => {
    window.location.reload(false);
  };
  return (
    <div
      className={`flex flex-col gap-8 items-center justify-center w-80 ${
        hidden ? "block" : "hidden"
      }`}
    >
      <img src={Completed} alt="complete-icon" className="w-16 h-16 " />
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-medium text-2xl tracking-widest uppercase">
          Thank You!
        </h1>
        <p className="text-dgviolet">We've added your card details</p>
      </div>
      <button
        onClick={reload}
        type="submit"
        className="h-10 w-full text-base rounded-lg bg-vdviolet text-white col-span-2"
      >
        Confirm
      </button>
    </div>
  );
};

export default CompletedForm;
