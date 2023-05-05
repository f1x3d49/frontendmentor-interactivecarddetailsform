import React, { createContext, useState } from "react";

export const SubmitContext = createContext();

export const SubmitContextProvider = ({ children }) => {
  const [hidden, setHidden] = useState(false);

  return (
    <SubmitContext.Provider value={[hidden, setHidden]}>
      {children}
    </SubmitContext.Provider>
  );
};
