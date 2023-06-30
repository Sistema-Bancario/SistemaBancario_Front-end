import React, { useEffect, useState } from 'react';
import { transaction } from '../model/transactions';
import { sendData } from '../helpers/transactionsHelper';
import { Link } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import { apiMisCuentas } from '../../Cuenta/api/apiCuentas';

export const CreateTransaction = () => {
  const [agregar, setAgregar] = useState(transaction);
  const [misCuentas, setMisCuentas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [saldoInsuficiente, setSaldoInsuficiente] = useState(false);

  const viewMisCuentas = async () => {
    const getMisCuentas = await apiMisCuentas();
    setMisCuentas(getMisCuentas);
  };

  useEffect(() => {
    viewMisCuentas();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const cuentaOrigen = misCuentas.find(
      (cuenta) => cuenta.numeroCuenta === agregar.transaction.cuentaOrigen
    );
  
    if (cuentaOrigen && parseFloat(agregar.transaction.monto) > parseFloat(cuentaOrigen.saldo)) {
      setSaldoInsuficiente(true);
    } else {
      if (agregar.transaction.monto > 10000) {
        setShowModal(true);
      } else {
        try {
          const success = await sendData(agregar, 1, 0);
          setAgregar(transaction);
        } catch (error) {
          setSaldoInsuficiente(true);
        }
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSaldoInsuficiente(false);
  };

  return (
    <div className='container table-container'>
      <br /><br />
      <Link to="/misCuentas"><Button className='regresartransaccion'>Regresar</Button></Link>
      <h1 id='create-tarea'>Transferencia</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className="text-black">Cuenta Origen</label>
          <select
            className="form-control"
            name="cuentaOrigen"
            required
            onChange={(event) =>
              setAgregar({
                transaction: {
                  ...agregar.transaction,
                  cuentaOrigen: event.target.value,
                },
              })
            }
          >
            <option value="">Selecciona una cuenta</option>
            {misCuentas.map((cuenta, index) => (
              <option key={cuenta.numeroCuenta} value={cuenta.numeroCuenta}>
                {`${index + 1}. ${cuenta.numeroCuenta} - Saldo: ${cuenta.saldo}`}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label className="text-black">Cuenta Destino</label>
          <input
            type="text"
            className="form-control"
            name="cuentaDestino"
            required
            onChange={(event) =>
              setAgregar({
                transaction: {
                  ...agregar.transaction,
                  cuentaDestino: event.target.value,
                },
              })
            }
          />
        </div>

        <div className='form-group'>
          <label className="text-black">Monto</label>
          <input
            type="text"
            className="form-control"
            name="monto"
            inputMode="numeric"
            pattern="[0-9]*"
            required
            onChange={(event) =>
              setAgregar({
                transaction: {
                  ...agregar.transaction,
                  monto: event.target.value,
                },
              })
            }
          />
        </div>

        <div className='form-group'>
          <label className="text-black">Tipo de Cuenta</label>
          <select
            type="text"
            className="form-control"
            name="tipoCuenta"
            required
            onChange={(event) =>
              setAgregar({
                transaction: {
                  ...agregar.transaction,
                  tipoCuenta: event.target.value,
                },
              })
            }
          >
            <option value="">Selecciona una cuenta</option>
            <option value="ahorro">Ahorro</option>
            <option value="monetaria">Monetaria</option>
          </select>
        </div>

        <div className='form-group'>
          <label className="text-black">Descripción</label>
          <input
            type="text"
            className="form-control"
            name="descripcion"
            required
            onChange={(event) =>
              setAgregar({
                transaction: {
                  ...agregar.transaction,
                  descripcion: event.target.value,
                },
              })
            }
          />
        </div>

        <div className="container text-center">
          <button id="btn-enviar" type="submit" className="btn">
            Enviar
          </button>
        </div>
      </form>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Advertencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El monto no puede exceder los 10000.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={saldoInsuficiente} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Saldo Insuficiente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Saldo insuficiente en la cuenta de origen
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};
