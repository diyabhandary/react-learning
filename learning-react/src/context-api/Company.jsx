import Context2 from "./Context2";
import Employee from "./Employee";

const Company = () => {
  return (
    <Context2>
      <h1>Company Component</h1>
      <Employee />
    </Context2>
  );
};

export default Company;