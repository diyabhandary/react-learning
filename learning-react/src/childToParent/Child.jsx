import React from "react";

const Child = (props) => {
  const { setMessage } = props;

  return (
    <>
      <h2>Child</h2>
      <h3>
        Data flow from Child component to Parent component is possible
        indirectly using a callback function.
      </h3>

      <button onClick={() => setMessage("Have a nice day!")}>
        Change message
      </button>
    </>
  );
};

export default Child;