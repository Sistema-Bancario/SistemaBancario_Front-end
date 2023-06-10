import { useEffect, useState } from "react";
import { transaction } from "../model/transactions";
import { apiTransaction } from "../api/apiTransactions";

export const ListaTransactions = () => {
    const [listaTransactions, setListaTransactions] = useState([]);
    const [error, setError] = useState(null);
//    const [showModal, setShowModal] = useState(false);
//    const [transactions, setTransactions] = useState(transaction);

    const viewTransactionsList = async () => {
        try {
            const getListaTransactionsFromApi = await apiTransaction();
            setListaTransactions(getListaTransactionsFromApi[1]);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        viewTransactionsList();
    }, []);

    useEffect(() => {
        console.log(listaTransactions);
    }, [listaTransactions]);
    
//    const handleOpenModal = (transaction) => {
//        setShowModal(true);
//        setTransactions(transaction);
//    }

//    const handleCloseModal = () => {
//        setShowModal(false);
//    }

    if (error) {
        return <div>Error en transaccion: {error.message}</div>
    }

    return (
        <>
            <div className="container mt-4 mb-5">
                <h1 className="listatransacciones">Lista de Transacciones</h1>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Cuenta Origen</th>
                                <th scope="col">Cuenta Destino</th>
                                <th scope="col">Monto</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Tipo de Cuenta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaTransactions.map((transaction) => {
                                return (
                                    <tr key={String(transaction._id)}>
                                        <td>{transaction.cuentaOrigen}</td>
                                        <td>{transaction.cuentaDestino}</td>
                                        <td>{transaction.monto}</td>
                                        <td>{transaction.fecha}</td>
                                        <td>{transaction.tipoCuenta}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}