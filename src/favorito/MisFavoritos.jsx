import React, { useEffect, useState, useContext } from "react";
import { agregarFavorito, apiEliminarContacto, apiEliminarLista, apiFavoritos } from "./api/apiFavoritos";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, Col, Row, Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export const Favoritos = () => {
  const { id } = useParams();
  const [favoritos, setFavoritos] = useState([]);
  const [contactos, setContactos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [noCuentaEmisor, setNoCuentaEmisor] = useState("");
  const [nickname, setNickname] = useState("");
  const [tipoCuenta, setTipoCuenta] = useState("");

  const navigate = useNavigate();
  const [cuentaDestino, setCuentaDestino] = useState("");

  const getFavoritos = async () => {
    try {
      const favoritosData = await apiFavoritos(id);
      setFavoritos(favoritosData.favoritos);
      setContactos(favoritosData.favoritos.contactos.usuarios);
    } catch (error) {
      console.error("Error al obtener los favoritos:", error);
    }
  };

  useEffect(() => {
    getFavoritos();
  }, []);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async () => {
    const agregarFav = await agregarFavorito(favoritos._id, noCuentaEmisor, nickname, tipoCuenta);
    if (agregarFav) {
      Swal.fire({
        icon: "success",
        title: "Se agregó un nuevo favorito",
        text: "Has agregado un nuevo favorito",
        confirmButtonText: "Ok",
      }).then(() => {
        window.location.reload(); // Recargar la página
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        confirmButtonText: "Ok",
      });
    }
    handleModalClose();
  };

  const handleEliminarLista = async () => {
    const confirmacion = await Swal.fire({
      icon: "success",
      title: "¿Estás seguro de eliminar toda la lista?",
      confirmButtonText: "Ok",
    });

    if (confirmacion.isConfirmed) {
      const resultado = await apiEliminarLista(favoritos._id);
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Se eliminó una lista de favoritos",
          text: "Has eliminado una lista de favoritos",
          confirmButtonText: "Ok",
        }).then(() => {
          window.location.reload(); // Recargar la página
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          confirmButtonText: "Ok",
        });
      }
      setFavoritos([]);
      setContactos([]);
    }
  };

  const handleEliminarFavorito = async (c) => {
    const confirmacion = await Swal.fire({
      icon: "success",
      title: "¿Estás seguro de eliminar este favorito?",
      confirmButtonText: "Ok",
    });

    if (confirmacion.isConfirmed) {
      const resultado = await apiEliminarContacto(favoritos._id, c.cuentas);
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Se eliminó un favorito",
          text: "Has eliminado un favorito",
          confirmButtonText: "Ok",
        }).then(() => {
          window.location.reload(); // Recargar la página
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          confirmButtonText: "Ok",
        });
      }
    }
  };

  const handleTransferirClick = (cuenta) => {
    setCuentaDestino(cuenta);
    navigate("/createTransaction"); // Navegar al componente "CreateTransaction"
  };
  return (
    <div className="container mt-4 table-container">
      <Link to={`/buscarporNum/${id}`} className="btn btn-primary">
        Regresar
      </Link>
      <br /><br /><br />
      <h1>Lista de Favoritos</h1>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button className="btn btn-primary" onClick={handleModalShow}>
          Agregar Favorito
        </Button>
        <Button className="btn btn-danger" onClick={handleEliminarLista}>
          Eliminar Lista
        </Button>
      </div>

      <section className="favoritos-section">
        <Row xs={1} md={2} className="g-3">
          {contactos.map((c) => (
            <Col key={c._id}>
              <Card className="h-100">
                <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <div style={{ width: "150px", height: "150px", margin: "0 auto", borderRadius: "50%", overflow: "hidden" }}>
                    <img src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <Card.Title>{c.nickname}</Card.Title>
                  <Card.Text>
                    <strong>Numero de Cuenta:</strong> {c.cuentas}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="danger" onClick={() => handleEliminarFavorito(c)}>
                    Eliminar
                  </Button>
                  <Link className="btn btn-dark" to={`/transferirFav/${c.cuentas}`} onClick={() => handleTransferirClick(c.cuentas)}>
                    Transferir
                  </Link>

                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Favorito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="noCuentaEmisor">
              <Form.Label>No. Cuenta Destino</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el número de cuenta del Destino"
                value={noCuentaEmisor}
                onChange={(e) => setNoCuentaEmisor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="TipoCuenta">
              <Form.Label>Tipo de Cuenta</Form.Label>
              <Form.Control
                as="select"
                value={tipoCuenta}
                onChange={(e) => setTipoCuenta(e.target.value)}
              >
                <option value="">Selecciona una cuenta</option>
                <option value="ahorro">Ahorro</option>
                <option value="monetaria">Monetaria</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="nickname">
              <Form.Label>Nickname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nickname del favorito"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Favoritos;
