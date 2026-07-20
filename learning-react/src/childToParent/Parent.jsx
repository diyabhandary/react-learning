import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("Good morning!");

  return (
    <>
      <h2>Parent message - {message}</h2>
      <Child setMessage={setMessage} />
    </>
  );
};

export default Parent;