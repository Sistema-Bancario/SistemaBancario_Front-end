import React, { useState } from "react";
import { sendData } from "../helpers/adminsHelper";
import { usersAdmin } from "../model/usersAdmin";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";

export const CreateAdmin = () => {
    const [agregar, setAgregar] = useState(usersAdmin);
    console.log(agregar)
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
        // Llamar a la función enviarDatos() y pasar el estado actual como argumento
    };

    return (
        <>
            <div className="container table-container">
                <br /><br />
                <Link to="/ListaUsuarios"><Button className=''>Regresar</Button></Link>
                <h1 id="create-tarea">Agregar Administrador</h1>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            onChange={(event) =>
                                setAgregar({
                                    usersAdmin: {
                                        ...agregar.usersAdmin,
                                        nombre: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Correo</label>
                        <input
                            type="text"
                            className="form-control"
                            name="correo"
                            onChange={(event) =>
                                setAgregar({
                                    usersAdmin: {
                                        ...agregar.usersAdmin,
                                        correo: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            onChange={(event) =>
                                setAgregar({
                                    usersAdmin: {
                                        ...agregar.usersAdmin,
                                        password: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="container text-center">
                            <button id="btn-enviar" type="submit" className="btn" >
                                Enviar
                            </button>
                    </div>
                </form>
            </div>
        </>
    );
};