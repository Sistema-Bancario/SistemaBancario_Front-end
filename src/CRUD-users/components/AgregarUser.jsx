import React, { useState } from "react";
import { sendData } from "../helpers/usersHelper";
import { user } from "../model/users";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";


export const CreateUser = () => {
    const [agregar, setAgregar] = useState(user);
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData( agregar , 1, 0);
    };

    return (
        <>
            <div className="container table-container">
                <br /><br />
                <Link to="/ListaUsuarios"><Button className=''>Regresar</Button></Link>
                <h1 id="create-tarea">Agregar Usuario</h1>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
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
                                    user: {
                                        ...agregar.user,
                                        correo: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Nickname</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nickname"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        nickname: event.target.value,
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
                                    user: {
                                        ...agregar.user,
                                        password: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">DPI</label>
                        <input
                            type="text"
                            className="form-control"
                            name="dpi"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        dpi: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Direccion</label>
                        <input
                            type="text"
                            className="form-control"
                            name="direccion"
                            onChange={(event) =>
                                setAgregar({
                                user: {
                                        ...agregar.user,
                                        direccion: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Celular</label>
                        <input
                            type="text"
                            className="form-control"
                            name="celular"
                            onChange={(event) =>
                                setAgregar({
                                user: {
                                        ...agregar.user,
                                        celular: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Trabajo</label>
                        <input
                            type="text"
                            className="form-control"
                            name="trabajo"
                            onChange={(event) =>
                                setAgregar({
                                user: {
                                        ...agregar.user,
                                        trabajo: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Ingresos</label>
                        <input
                            type="text"
                            className="form-control"
                            name="ingresos"
                            onChange={(event) =>
                                setAgregar({
                                user: {
                                        ...agregar.user,
                                        ingresos: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="container text-center">
                        <button id="btn-enviar" type="submit" className="btn">
                            Enviar
                        </button>
                    </div>
                    <br /><br />
                </form>
            </div>
        </>
    );
};