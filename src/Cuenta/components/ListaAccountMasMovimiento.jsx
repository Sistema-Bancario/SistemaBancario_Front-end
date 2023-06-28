import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CuentasconMasMovimiento } from '../api/apiCuentas';
import { Button } from 'react-bootstrap';

const ListaAccountMasMovimiento = () => {
    const { userId } = useParams();
    const [cuentas, setCuentas] = useState([]);
    const [orden, setOrden] = useState('asc');

    const obtenerCuentasConMasTransferencias = async (userId, orden) => {
        const cuentas = await CuentasconMasMovimiento(userId, orden);
        setCuentas(cuentas);
    };

    useEffect(() => {
        obtenerCuentasConMasTransferencias(userId, orden);
    }, [userId, orden]);

    const cambiarOrden = (nuevoOrden) => {
        setOrden(nuevoOrden);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

    return (
        <>
            <div className="container mt-4 mb-5 table-container">
                <Link to="/ListaUsuarios">
                    <Button className="">Regresar</Button>
                </Link>
                <h1 id="create-tarea">Lista de cuentas con más movimiento</h1>
                <br />
                <div className="button-container">
                    <button onClick={() => cambiarOrden('asc')}>Orden Ascendente</button>
                    <button onClick={() => cambiarOrden('desc')}>Orden Descendente</button>
                </div>

                <br /><br />
                <ul className="grid-list">
                    {cuentas.map((cuenta, index) => (
                        <li key={index}>
                            <div className="grid-item">
                                <label>Número de cuenta:</label> {cuenta.numeroCuenta} <br />
                                <label>Tipo de Cuenta:</label> {capitalizeFirstLetter(cuenta.tipoCuenta)} <br />
                                <label>Cantidad de transferencias:</label> {cuenta.cantidadTransferencias}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>



        </>
    );
};

export default ListaAccountMasMovimiento;
