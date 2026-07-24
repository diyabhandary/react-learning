import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Edituser = () => {

  let [state, setState] = useState({
    fname: "",
    email: "",
  });

  let { fname, email } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let parameter = useParams();
  console.log(parameter);
  let { id } = parameter;

  useEffect(() => {
    axios
      .get(`http://localhost:4000/employees/${id}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setState(response.data);
      });
  }, []);

  let navigator = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();

    let payload = state;

    axios.put(
      `http://localhost:4000/employees/${id}`,
      payload
    );

    navigator("/users");
    toast.success("Data updated successfully!");
  };

  return (
    <>
      <h2>Edit user</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname</label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <button>Edit user</button>
      </form>
    </>
  );
};

export default Edituser;