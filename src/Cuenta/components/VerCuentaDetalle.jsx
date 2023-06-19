import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { buscarCuentaPorNumero } from '../api/apiCuentas';

const VerCuentaDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cuenta, setCuenta] = useState([]);

  const verCuenta = async (id) => {
    const getMiCuenta = await buscarCuentaPorNumero(id);
    setCuenta(getMiCuenta);
  };

  useEffect(() => {
    verCuenta(id);
  }, [id]);

  if (cuenta.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="container mt-4 table-container">
        <Link to="/Miscuentas" className="btn btn-primary btn-lg m-2 mr-auto">Volver</Link>
      </div>
      <div className="d-flex justify-content-center mt-5 table-container">
        {cuenta.map((cuenta, index) => (
          <div className="cuadro" key={index}>

            <table className="table table-bordered" style={{ maxWidth: '700px' }}>
              <tbody>
                <tr>
                  <th scope="row">NOMBRE DE LA PERSONA:</th>
                  <td>{cuenta.propietario.nombre}</td>
                </tr>
                <tr>
                  <th scope="row">NUMERO DE CUENTA:</th>
                  <td>{cuenta.numeroCuenta}</td>
                </tr>
                <tr>
                  <th scope="row">Saldo disponible:</th>
                  <td>Q.{cuenta.saldo}</td>
                </tr>
                <tr>
                  <th scope="row">TOTAL:</th>
                  <td>Q.{cuenta.saldo}</td>
                </tr>
              </tbody>
            </table>
            <div className="line"></div>
            <div className="d-flex justify-content-center">
              <button
                className="custom-btn btn-12"
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`/favoritos/${cuenta.numeroCuenta}`);
                }}
              >
                <span>Click!</span>
                <span>Favoritos</span>
              </button>
              <br /><br />
              <button
                className="custom-btn btn-13"
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`/historial/${cuenta.numeroCuenta}`);
                }}
              >
                <span>Click!</span>
                <span>historial</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VerCuentaDetalle;
