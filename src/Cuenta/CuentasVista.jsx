import React, { useEffect, useState } from "react";
import { apiMisCuentas } from "./api/apiCuentas";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

export const CuentasVista = () => {
  const navigate = useNavigate();
  const [misCuentas, setMisCuentas] = useState([]);

  const viewMisCuentas = async () => {
    const getMisCuentas = await apiMisCuentas();
    setMisCuentas(getMisCuentas);
  };

  useEffect(() => {
    viewMisCuentas();
  }, []);

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
          <div className="title-container">
          <h1 className="h1">Mis Cuentas</h1>
        </div>
          </Col>
        </Row>
        <Row className="mt-3">
          {misCuentas.map((c) => (
            <Col key={c._id} md={6} lg={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Numero de cuenta: {c.numeroCuenta}</Card.Title>
                  <Card.Text>Tipo de cuenta: {c.tipoCuenta.tipo}</Card.Text>
                  <Card.Text>Balance: {c.saldo}</Card.Text>
                </Card.Body>
                <Card.Footer>
                <button className="btn btn-primary" onClick={(event) => {
                  event.preventDefault();
                  navigate(`/favoritos/${c.numeroCuenta}`);
                }}> Favoritos </button>
                </Card.Footer>
              </Card>
              
            </Col>
          ))}
        </Row>
        
      </Container>
    </>
  );
};