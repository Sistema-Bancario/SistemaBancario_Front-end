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

    return (
        <>
            <div className="container mt-4 mb-5 table-container">
            <Link to="/ListaUsuarios"><Button className=''>Regresar</Button></Link>
                <h1 id="create-tarea">Lista de cuentas con más movimiento</h1>
                <button onClick={() => cambiarOrden('asc')}>Orden Ascendente</button>
                <button onClick={() => cambiarOrden('desc')}>Orden Descendente</button>
                    <br /><br />
                <ul>
                    {cuentas.map((cuenta, index) => {
                        return (
                            <td key={index}>
                                Número de cuenta: {cuenta.numeroCuenta} -
                                Cantidad de transferencias: {cuenta.cantidadTransferencias}
                            </td>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default ListaAccountMasMovimiento;
