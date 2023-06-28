import React, { useEffect, useState } from "react";
import { apiEliminarMiUsuario, apiUsuarioById } from "../api/apiUser";
import { UpdateProfile } from "./UpdateProfile";

export const Profile = () => {
  const [usuario, setUsuario] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const eliminarUser = async () => {
    await apiEliminarMiUsuario();
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const viewCliente = async () => {
    const getCliente = await apiUsuarioById();
    setUsuario(getCliente);
  };

  useEffect(() => {
    viewCliente();
  }, [showModal]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-4 mb-4">
      <div className="section-wrapper">
        <section id="promo" className="promo section offset-header">
          <div className="container text-center">
            <h2 className="title">
              Mi <span className="highlight">Usuario</span>
            </h2>
            <p className="intro">
              Aquí encontrarás toda la información relacionada con tu usuario
            </p>
            <ul className="meta list-inline">
              <li className="list-inline-item"></li>
            </ul>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10" key={usuario._id}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={usuario.img}
                      className="img-fluid rounded-circle profile-image"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div>
                      <strong>NICKNAME:</strong> {usuario.nickname}{" "}
                    </div>
                    <div className="info-item">
                      <strong>CORREO:</strong> {usuario.correo}
                    </div>
                    <div className="info-item">
                      <strong>DPI:</strong> {usuario.DPI}
                    </div>
                    <div className="info-item">
                      <strong>NOMBRE:</strong> {usuario.nombre}
                    </div>
                    <div className="info-item">
                      <strong>DIRECCIÓN:</strong> {usuario.direccion}
                    </div>
                    <div className="info-item">
                      <strong>CELULAR:</strong> {usuario.celular}
                    </div>
                    <div className="info-item">
                      <strong>TRABAJO:</strong> {usuario.trabajo}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-warning"
                  onClick={() => handleOpenModal()}
                >
                  <i className="fa fa-user"></i> Editar
                </button>
                {/* <button
                  className="btn btn-danger"
                  onClick={eliminarUser}
                >
                  <i className="fa fa-trash"></i> Eliminar
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <UpdateProfile
          profileEdit={usuario}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateProfile>
      </div>
    </div>
  );
};