import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataConextProvider = ({ children }) => {
  const [details, setDetails] = useState("");

  return (
    <DataContext.Provider value={[details, setDetails]}>
      {children}
    </DataContext.Provider>
  );
};
