import React, { useState } from 'react';
import { account } from "../model/accounts";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { sendData } from '../helpers/cuentasHelper';

export const CreateAccount = () => {
  const [agregar, setAgregar] = useState(account);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(agregar.account.tipoCuenta)
    sendData(agregar, 1, 0);
  };

  return (
    <>
      <div className="container table-container">
        <br /><br />
        <Link to="/ListaUsuarios"><Button className=''>Regresar</Button></Link>
        <h1 id="create-tarea">Crear Cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-black">Propietario</label>
            <input
              type="text"
              className="form-control"
              name="propietario"
              required
              onChange={(event) =>
                setAgregar({
                  account: {
                    ...agregar.account,
                    propietario: event.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-group">
            <label className="text-black">Tipo de Cuenta</label>
            <select
              className="form-control"
              name="tipoCuenta"
              required
              onChange={(event) =>
                setAgregar({
                  account: {
                    ...agregar.account,
                    tipoCuenta: event.target.value,
                  },
                })
              }
            >
              <option value="">Selecciona una opción</option>
              <option value="ahorro">Ahorro</option>
              <option value="monetaria">Monetaria</option>
            </select>
          </div>

          <div className="form-group">
            <label className="text-black">Saldo</label>
            <input
              type="text"
              className="form-control"
              name="saldo"
              inputMode="numeric"
              pattern="[0-9]*"
              title="Debe tener dígitos numéricos"
              onChange={(event) =>
                setAgregar({
                  account: {
                    ...agregar.account,
                    saldo: event.target.value,
                  },
                })
              }
            ></input>
          </div>

          <div className="container text-center">
            <button id="btn-enviar" type="submit" className="btn">
              Enviar
            </button>
          </div>
          <br /><br />
        </form>
      </div>
    </>
  );
};
