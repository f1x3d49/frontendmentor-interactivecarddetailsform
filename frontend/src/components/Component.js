import React from "react";

const Component = () => {
  return (
    <form className="grid grid-cols-2 gap-3 tracking-widest text-xs  max-w-md">
      <div className="flex flex-col gap-1 col-span-2">
        <label>CARDHOLDER NAME</label>
        <div className="p-px bg-lgviolet rounded-lg focus:bg-gradient-to-r focus:from-gradient1 focus:to-gradient2">
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            className="h-8 w-full p-5 text-base text-lgviolet rounded-lg focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 col-span-2">
        <label>CARD NUMBER</label>
        <div className="p-px bg-lgviolet rounded-lg">
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            className="h-8 w-full p-5 text-base text-lgviolet rounded-lg focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full justify-between">
        <label className="">EXP. DATE (MM/YY)</label>
        <div className="flex gap-2">
          <div className="p-px bg-lgviolet rounded-lg">
            <input
              type="text"
              placeholder="MM"
              className="w-24 h-8 p-5 text-base text-lgviolet rounded-lg focus:outline-none"
            />
          </div>
          <div className="p-px bg-lgviolet rounded-lg">
            <input
              type="text"
              placeholder="YY"
              className="w-24 h-8 p-5 text-base text-lgviolet rounded-lg focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1   ">
        <label>CVC</label>
        <div className="p-px bg-lgviolet rounded-lg">
          <input
            type="text"
            placeholder="e.g. 123"
            className="h-8 w-full p-5 text-base text-lgviolet rounded-lg focus:outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="h-10 w-full text-base rounded-lg bg-vdviolet text-white col-span-2"
      >
        Confirm
      </button>
    </form>
  );
};

export default Component;
