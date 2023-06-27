import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { apiAccount } from '../api/apiTransactions';
import { Button } from 'react-bootstrap';

export const HistorialTransaccion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [cuenta, setCuenta] = useState(null);

  useEffect(() => {
    const viewCuentas = async () => {
      try {
        const getCuentas = await apiAccount(id);
        setCuenta(getCuentas);
      } catch (error) {
        setError(error);
      }
    };

    viewCuentas();
  }, [id]);

  if (error) {
    return <div>Hubo un error al cargar los usuarios: {error.message}</div>;
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().substring(0, 10);
  };

  const getTransactionMessage = (tipoTransaccion) => {
    return tipoTransaccion === 'debito' ? 'Se te Debito' : 'Se te Acredito';
  };

  const handleRegresarClick = (cuentaItem) => {
    navigate(`/buscarporNum/${cuentaItem.numeroCuenta}`);
  };

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center ">
          <br /><br />
          <h2 className="title">Historial de Transferencias</h2>
          <p className="intro">Listado de las transferencias realizadas</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="container mt-4 mb-5 offset-md-1">
      <Button className='regresartransaccion' onClick={() => handleRegresarClick(cuenta[0])}>Regresar</Button>
    <br /><br />
        <div className="row">
          {cuenta ? (
            <>
              {cuenta.length === 0 ? (
                <p>No hay transferencias disponibles en este momento.</p>
              ) : (
                cuenta.map((cuentaItem) =>
                  cuentaItem.transferencias.map((transferencia) => (
                    <div key={transferencia._id} className="col-md-4">
                      <div className="card mb-3">
                        <div className={`card-header bg-${transferencia.tipoTransaccion === 'debito' ? 'danger' : 'success'} text-white`}>
                          {formatDate(transferencia.fecha)}
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">NoCuenta: {cuentaItem.numeroCuenta}</h5>
                          <p className="card-text">Tipo de Cuenta: {capitalizeFirstLetter(transferencia.tipoCuenta)}</p>
                          <p className="card-text">{getTransactionMessage(transferencia.tipoTransaccion)}</p>
                          <p className="card-text">Monto: {transferencia.monto}</p>
                          <p className="card-text">Descripcion: {transferencia.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )
              )}
            </>
          ) : (
            <p>Cargando historial de transferencias...</p>
          )}
        </div>
      </div>

    </>
  );
};
