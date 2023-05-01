import React, { createContext } from "react";
import { data } from "../components/Component";

export const DataContext = createContext();

export const DataConextProvider = ({ children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
