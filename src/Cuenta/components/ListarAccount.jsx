import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { apiMisCuentas } from '../api/apiCuentas';

const ListarAccount = () => {
  const navigate = useNavigate();
  const [misCuentas, setMisCuentas] = useState([]);

  const viewMisCuentas = async () => {
    const getMisCuentas = await apiMisCuentas();
    setMisCuentas(getMisCuentas);
  };

  useEffect(() => {
    viewMisCuentas();
  }, []);

  const cardColors = ['economy', 'premiumeconomy', 'business', 'first'];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  

  return (
    <>
      <Row className="mt-5">
        <Col>
          <div className="title-container">
            <h1 className="h1111">Mis Cuentas</h1>
            
          </div>
        </Col>
      </Row>
                 

      <div className="tariffCards">
        <br />
        <br /><br /><br />
        {misCuentas.map((c, index) => (
          <div
            className={cardColors[index % cardColors.length]}
            key={c._id}
            md={6}
            lg={4}
            onClick={(event) => {
              event.preventDefault();
             navigate(`/buscarporNum/${c.numeroCuenta}`);
            }}
            style={{ cursor: 'pointer' }}
          >
            <img src="https://financialallianceforwomen.org/wp-content/uploads/2020/03/BAC-Credomatic-Square.png" alt="" />
            <h3> No. {c.numeroCuenta}</h3>
            <h2> Tipo de cuenta: {capitalizeFirstLetter(c.tipoCuenta)}</h2>
          </div>
        ))}
        <br />
      </div>
    </>
  );
};

export default ListarAccount;
