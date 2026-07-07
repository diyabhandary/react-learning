import { createContext } from "react";

export const contextApi = createContext();

const Context2 = ({ children }) => {
  const company = "Godrej";
  const employees = 250;

  return (
    <contextApi.Provider value={{ company, employees }}>
      {children}
    </contextApi.Provider>
  );
};

export default Context2;