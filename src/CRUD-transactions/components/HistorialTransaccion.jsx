import React from 'react'
import { useEffect, useState } from "react";
import { apiUser } from '../../CRUD-users/api/apiUsers';
import { useParams } from 'react-router-dom';
import { apiAccount } from '../api/apiTransactions';

export const HistorialTransaccion = () => {
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [cuenta, setCuenta] = useState([])
  console.log(cuenta);
    const viewCuentas = async () => {
        try {
          const getCuentas = await apiAccount(id);
          setCuenta(getCuentas);
        } catch (error) {
          setError(error);
        }
      };
    useEffect(() => {
        viewCuentas();
      }, []);  
  
    const handleOpenModal = (user) => {
      setShowModal(true);
      setUsers(user);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    if (error) {
      return <div>Hubo un error al cargar los users : {error.message}</div>;
    }
  
    return (
      <>
      <section id="promo" className="promo section offset-header ">
          <div className="container text-center">
            <br /><br />
  
            <h2 className="title">
              Usuarios
            </h2>
            <p className="intro">Listado de los Usuarios</p>
            <ul className="meta list-inline">
              <li className="list-inline-item"></li>
            </ul>
          </div>
        </section>
  
        <div className="container mt-4 mb-5 table-container">
          <div className="table-responsive text-center">

            {cuenta.length === 0 ? (

          <p>No hay créditos disponibles en este momento.</p>

        ) : (

          <table bordered>

<thead className="thead-dark">
                <tr>
                  <th scope="col">NoCuenta</th>
                  <th scope="col">Saldo</th>
                  <th scope="col">Transferencias</th>
                </tr>
              </thead>
              <tbody>
                <tr key={cuenta._id}>
                  <td>{cuenta.numeroCuenta}</td>
                  <td>{cuenta.saldo}</td>
                  <td>
                    {cuenta.transferencias.length === 0 ? (
                      <p>No hay transferencias disponibles.</p>
                    ) : (
                      <ul>
                        {cuenta.transferencias.map((transferencia) => (
                          <li key={transferencia.id}>
                            {/* Renderizar la información de cada transferencia */}
                            {transferencia}
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              </tbody>

          </table>

        )}
          </div>
        </div>
      </>
    );
}
