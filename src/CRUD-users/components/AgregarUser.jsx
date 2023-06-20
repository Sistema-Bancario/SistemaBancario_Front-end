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
                            required
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
                            type="email"
                            className="form-control"
                            id="inemail"
                            aria-describedby="emailHelp"
                            required
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
                            required
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
                            required
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
                            inputMode="numeric"
                            pattern="[0-9]{13}"
                            title="El DPI debe tener 13 dígitos numéricos"
                            required
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
                            required
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
                            inputMode="numeric"
                            pattern="[0-9]{8}"
                            title="El número de celular debe tener 8 dígitos numéricos"
                            required
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
                        <label className="text-black">Imagen</label>
                        <input
                            type="text"
                            className="form-control"
                            name="img"
                            required
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        img: event.target.value,
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
                            required
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
                            inputMode="numeric"
                            pattern="[0-9]*"
                            title="Debe tener dígitos numéricos"
                            required
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