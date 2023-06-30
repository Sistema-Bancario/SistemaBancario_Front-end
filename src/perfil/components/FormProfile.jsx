import React, { useState } from "react";
import { sendData } from "../helpers/FormProfileHelper";

export const FormProfile = (profileEdit, option, id) => {
  const [state, setState] = useState(profileEdit);
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(state, 2, id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-black">Correo</label>
        <input
          type="email"
          className="form-control"
          id="inemail"
          aria-describedby="emailHelp"
          required
          value={state.profile.correo}
          onChange={(event) =>
            setState({
              profile: {
                ...state.profile,
                correo: event.target.value,
              }
            })
          }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          onChange={(event) =>
            setState({
              profile: {
                ...state.profile,
                password: event.target.value,
              }
            })
          }
        ></input>
      </div>

      <div className="form-group">
        <label className="text-black">Celular</label>
        <input
          type="text"
          className="form-control"
          name="celular"
          inputMode="numeric"
          pattern="[0-9]{8}"
          title="El número de celular debe tener 8 dígitos numéricos"
          required
          value={state.profile.celular}
          onChange={(event) =>
            setState({
              profile: {
                ...state.profile,
                celular: event.target.value,
              }
            })
          }
        ></input>
      </div>

      <div className="form-group">
        <label className="text-black">Imagen</label>
        <input
          className="form-control"
          type="url"
          value={state.profile.img}
          name="img"
          onChange={(event) =>
            setState({
              profile: {
                ...state.profile,
                img: event.target.value,
              }
            })
          }
        ></input>
      </div>

      <div className="container text-center">
        <button id="btn-enviar" type="submit" className="btn btn-success mt-2">
          Enviar
          <i className="fa fa-save"></i>
        </button>
      </div>
    </form>
  );
};
