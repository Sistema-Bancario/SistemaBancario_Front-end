import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { user } from "../model/users";
import { UpdateUsers } from "./UpdateUser";
import { apiUser, DeleteUser } from "../api/apiUsers";

export const ListaUsers = () => {
  const [listaUsers, setListaUsers] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState(user);

  const viewUsersList = async () => {
    try {
      const getListaUsersFromApi = await apiUser();
      setListaUsers(getListaUsersFromApi[1]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    viewUsersList();
  }, []);

  useEffect(() => {
    console.log("usuarios actualizados:", listaUsers);
  }, [listaUsers]);

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

  const eliminarUsers = async (id) => {
    let result = await DeleteUser(id);
    if (result) {
      setListaUsers(listaUsers.filter((user) => user._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar!",
      });
    }
  };

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
          <table className="table ml-auto custom-table-margin">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Nickname</th>
                <th scope="col">Cuentas</th>
                <th scope="col">DPI</th>
                <th scope="col">Dirección</th>
                <th scope="col">Celular</th>
                <th scope="col">Trabajo</th>
                <th scope="col">Ingresos</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listaUsers.map((user) => {
                return (
                  <tr key={String(user._id)}>
                    <td>{user.nombre}</td>
                    <td>{user.nickname}</td>
                    <td>{user.cuentas.map((cuenta, index) => `${index + 1}. ${cuenta}`).join(", ")}</td>
                    <td>{user.DPI}</td>
                    <td>{user.direccion}</td>
                    <td>{user.celular}</td>
                    <td>{user.trabajo}</td>
                    <td>{user.ingresos}</td>
                    <td>
                      <button className="btn btn-warning" onClick={() => handleOpenModal(user)}>
                        Editar
                      </button>
                      <button className="btn btn-danger" onClick={() => eliminarUsers(user._id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <UpdateUsers
          userEdit={users}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateUsers>
      </div>
    </>
  );
};
