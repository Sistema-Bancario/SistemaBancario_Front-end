import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { apiMisCuentas } from "../../Cuenta/api/apiCuentas";

export const CuentaHistorial = () => {
  const navigate = useNavigate();
  const [misCuentas, setMisCuentas] = useState([]);

  const viewMisCuentas = async () => {
    const getMisCuentas = await apiMisCuentas();
    setMisCuentas(getMisCuentas);
  };

  useEffect(() => {
    viewMisCuentas();
  }, []);

  const cardColors = ["economy", "premiumeconomy", "business", "first"];

  return (
    <>
      <Row className="mt-5">
        <Col>
          <div className="title-container">
            <h1 className="h1111">Mis Cuentas</h1>
          </div>
        </Col>
      </Row>
      <br /><br />

      <div className="tariffCards">
        <br /> <br />

        {misCuentas.map((c, index) => (
          <div
            className={cardColors[index % cardColors.length]}
            key={c._id}
            md={6}
            lg={4}
          >
            <img src="https://financialallianceforwomen.org/wp-content/uploads/2020/03/BAC-Credomatic-Square.png" alt=""/>
            <h3> No. {c.numeroCuenta}</h3>
            <h2> Tipo de cuenta: {c.tipoCuenta}</h2>
            <span>Saldo: {c.saldo}</span>
            <button class="custom-btn btn-12" onClick={(event) => {
                  event.preventDefault();
                  navigate(`/historial/${c.numeroCuenta}`);
                }}><span>Click!</span><span>historial</span></button>
          </div>

        ))}
        <br />
      </div>
    </>
  );
};
