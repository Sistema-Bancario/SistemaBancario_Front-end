import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { apiUserAdmin } from "../api/apiUsersAdmin";

export const ListaAdmins = () => {
  const [listaAdmins, setListaAdmins] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const viewAdminsList = async () => {
    try {
      const getListaAdminsFromApi = await apiUserAdmin();
      setListaAdmins(getListaAdminsFromApi[1]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    viewAdminsList();
  }, []);

  useEffect(() => {
    console.log("usuarios actualizados:", listaAdmins);
  }, [listaAdmins]);

  if (error) {
    return <div>Hubo un error al cargar los Admins : {error.message}</div>;
  }

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Administradores
          </h2>
          <p className="intro">Listado de los administradores</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="container mt-4 mb-5">
        <button style id="boton-agregar"/>

          <Link to='/createUserAdmin'>Agregar Administradores </Link>
        <button  id="boton-agregar">
          
          <Link  to='/createUserAdmin'>Agregar Administradores </Link>
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
            <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">correo</th>
            </tr>
          </thead>
          <tbody>

            {listaAdmins.map((userAdmin) => {

              return (

                <tr key={String(userAdmin._id)}>
                  <th scope="row">{userAdmin._id}</th>
                  <td>{userAdmin.nombre}</td>
                  <td>{userAdmin.correo}</td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
