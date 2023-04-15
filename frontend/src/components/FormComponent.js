import React from "react";

const FormComponent = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <form className="flex flex-col gap-2 max-w-md">
        <div className="flex flex-col">
          <label>CARDHOLDER NAME</label>
          <input type="text" placeholder="e.g. Jane Appleseed" />
        </div>
        <div className="flex flex-col ">
          <label>CARD NUMBER</label>
          <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
        </div>
        <div className="flex flex-col">
          <label>EXP. DATE (MM/YY)</label>
          <div className="flex gap-2">
            <input type="text" placeholder="MM" />
            <input type="text" placeholder="YY" />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label>CVC</label>
            <input type="text" placeholder="e.g. 123" />
          </div>
        </div>
        <button type="submit" className="w-full bg-vdviolet text-white ">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
