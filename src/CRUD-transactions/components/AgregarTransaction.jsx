import React, { useState } from 'react'
import { transaction } from '../model/transactions'
import { sendData } from '../helpers/transactionsHelper';

export const CreateTransaction = () => {
    const [agregar, setAgregar] = useState(transaction);
    console.log(agregar);
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
    }

    return (
        <div className='container'>
            <h1 id='create-tarea'>Transaccion</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className="text-black">Cuenta Origen</label>
                    <input
                        type="text"
                        className="form-control"
                        name="cuentaOrigen"
                        onChange={(event) =>
                            setAgregar({
                                transaction: {
                                    ...agregar.transaction,
                                    cuentaOrigen: event.target.value,
                                },
                            })
                        }
                    />
                </div>

                <div className='form-group'>
                <label className="text-black">Cuenta Destino</label>
                    <input
                        type="text"
                        className="form-control"
                        name="cuentaDestino"
                        onChange={(event) =>
                            setAgregar({
                                transaction: {
                                    ...agregar.transaction,
                                    cuentaDestino: event.target.value,
                                },
                            })
                        }
                    />
                </div>

                <div className='form-group'>
                <label className="text-black">Monto</label>
                    <input
                        type="text"
                        className="form-control"
                        name="monto"
                        onChange={(event) =>
                            setAgregar({
                                transaction: {
                                    ...agregar.transaction,
                                    monto: event.target.value,
                                },
                            })
                        }
                    />
                </div>

                <div className='form-group'>
                <label className="text-black">Fecha</label>
                    <input
                        type="text"
                        className="form-control"
                        name="fecha"
                        onChange={(event) =>
                            setAgregar({
                                transaction: {
                                    ...agregar.transaction,
                                    fecha: event.target.value,
                                },
                            })
                        }
                    />
                </div>

                <div className='form-group'>
                <label className="text-black">Tipo de Cuenta</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tipoCuenta"
                        onChange={(event) =>
                            setAgregar({
                                transaction: {
                                    ...agregar.transaction,
                                    tipoCuenta: event.target.value,
                                },
                            })
                        }
                    />
                </div>

                <div className="container text-center">
                    <button id="btn-enviar" type="submit" className="btn">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}
