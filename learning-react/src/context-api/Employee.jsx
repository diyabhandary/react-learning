import { useContext } from "react";
import { contextApi } from "./Context2";

const Employee = () => {
  const data = useContext(contextApi);
  const { company, employees } = data;

  return (
    <>
      <h2>Employee</h2>
      <h3>Company Name: {company}</h3>
      <h3>No. of Employees: {employees}</h3>
    </>
  );
};

export default Employee;