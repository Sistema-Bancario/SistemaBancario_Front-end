import React, { useState } from "react";
import { sendData } from "../helpers/usersHelper";

export const FormUser = (UserEdit, option, _id) => {
    const [state, setState] = useState(UserEdit);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(state, 2, _id);
    };

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="form-group ">
                    <label className="text-black">Nickname</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nickname"
                        required
                        value={state.user.nickname}
                        onChange={(event) =>
                            setState({
                                user: {
                                    ...state.user,
                                    nickname: event.target.value,
                                },
                            })
                        }
                    />
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
                        value={state.user.celular}
                        onChange={(event) =>
                            setState({
                                user: {
                                    ...state.user,
                                    celular: event.target.value,
                                },
                            })
                        }
                    ></input>
                </div>

                <div className="form-group">
                    <label className="text-black">Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        id="inemail"
                        aria-describedby="emailHelp"
                        required
                        value={state.user.correo}
                        onChange={(event) =>
                            setState({
                                user: {
                                    ...state.user,
                                    correo: event.target.value,
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
            </form>
        </>
    );
};