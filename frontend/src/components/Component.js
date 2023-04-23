import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Component = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    },

    // Validate Form
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      number: Yup.number().required("Card Number is required"),
      month: Yup.number()
        .required("Expiry month is required")
        .min(1, "This month does not exist")
        .max(12, "This month does not exist"),
    }),

    // Submit From
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-2 gap-3 tracking-widest text-xs  max-w-md"
    >
      <div className="flex flex-col gap-1 col-span-2">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <div className="p-px bg-lgviolet rounded-lg focus-within:bg-gradient-to-r focus-within:from-[#6448fe] focus-within:to-[#600594]">
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="e.g. Jane Appleseed"
            className="h-8 w-full p-5 text-base text-vdviolet rounded-lg focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 col-span-2">
        <label htmlFor="number">CARD NUMBER</label>
        <div className="p-px bg-lgviolet rounded-lg focus-within:bg-gradient-to-r focus-within:from-[#6448fe] focus-within:to-[#600594]">
          <input
            type="text"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            placeholder="e.g. 1234 5678 9123 0000"
            className="h-8 w-full p-5 text-base text-vdviolet rounded-lg focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full justify-between">
        <label className="">EXP. DATE (MM/YY)</label>
        <div className="flex gap-2">
          <div className="p-px bg-lgviolet rounded-lg focus-within:bg-gradient-to-r focus-within:from-[#6448fe] focus-within:to-[#600594]">
            <input
              type="text"
              name="month"
              value={formik.values.month}
              onChange={formik.handleChange}
              placeholder="MM"
              className="w-24 h-8 p-5 text-base text-vdviolet rounded-lg focus:outline-none"
            />
          </div>
          <div className="p-px bg-lgviolet rounded-lg focus-within:bg-gradient-to-r focus-within:from-[#6448fe] focus-within:to-[#600594]">
            <input
              type="text"
              name="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              placeholder="YY"
              className="w-24 h-8 p-5 text-base text-vdviolet rounded-lg focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1   ">
        <label htmlFor="cvc">CVC</label>
        <div className="p-px bg-lgviolet rounded-lg focus-within:bg-gradient-to-r focus-within:from-[#6448fe] focus-within:to-[#600594]">
          <input
            type="text"
            name="cvc"
            value={formik.values.cvc}
            onChange={formik.handleChange}
            placeholder="e.g. 123"
            className="h-8 w-full p-5 text-base text-vdviolet rounded-lg focus:outline-none"
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
