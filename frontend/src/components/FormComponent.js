import React from "react";

const FormComponent = () => {
  return (
    <form className="relative flex flex-col gap-2 max-w-md max-h-fit">
      <div className="flex flex-col w-80">
        <label>CARDHOLDER NAME</label>
        <input type="text" placeholder="e.g. Jane Appleseed" />
      </div>
      <div className="flex flex-col w-80">
        <label>CARD NUMBER</label>
        <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <label className="">EXP. DATE (MM/YY)</label>
          <div className="flex gap-2">
            <input type="text" placeholder="MM" className="w-1/3" />
            <input type="text" placeholder="YY" className="w-1/3" />
          </div>
        </div>
        <div className="flex flex-col w-24">
          <label>CVC</label>
          <input type="text" placeholder="e.g. 123" />
        </div>
      </div>
      <button type="submit" className="w-full bg-vdviolet text-white ">
        Confirm
      </button>
    </form>
  );
};

export default FormComponent;
