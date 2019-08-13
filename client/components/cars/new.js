import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post(
      '/api/cars',
      {
        car: {
          manufacturer: inputs.manufacturer,
          model: inputs.model,
          price: inputs.price,
          type: inputs.type
        }
      }
    )
      .then(resp => {
        console.log(resp);
        setRedirect(true);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleInputChange(event) {
    event.persist();
    const model = event.target.model;
    const value = event.target.value;

    setInputs(inputs => {
      return {
        ...inputs, [model]: value
      }
    });
  }

  if (redirect) {
    return <Redirect to="/cars" />;
  }

  return ();
}

export default New;