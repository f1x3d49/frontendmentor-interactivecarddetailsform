import React from "react";

const FormComponent = () => {
  return (
    <div className="flex w-full h-full items-center justify-center ">
      <form>
        <div className="grid grid-cols-2">
          <div className="flex flex-col col-span-2">
            <label>CARDHOLDER NAME</label>
            <input type="text" placeholder="e.g. Jane Appleseed" />
          </div>
          <div className="flex flex-col col-span-2">
            <label>CARD NUMBER</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
          </div>
          <div className="flex flex-col col-span-1">
            <label>EXP. DATE (MM/YY)</label>
            <div className="flex gap-2">
              <input type="text" placeholder="MM" />
              <input type="text" placeholder="YY" />
            </div>
          </div>
          <div className="flex flex-col col-span-1">
            <label>CVC</label>
            <input type="text" placeholder="e.g. 123" />
          </div>
          <button type="submit" className="col-span-2">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
