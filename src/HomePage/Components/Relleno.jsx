import React from 'react'
import puntospng from "../../assets/Puntos.png"
import bancapng from "../../assets/banca.png"
import tarjetaspng from "../../assets/Tarjetas.png"
export const Relleno = () => {
    return (
        <>
        <br />
            <div className='container'>
                <h2>Beneficios Exclusivos de KinalBridge</h2>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={puntospng} height="300px"  className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Programa de puntos</h5>
                                    <p className="card-text">Descubre todos los beneficios que te ofrece nuestro sistema de puntos al adquirir tu tarjeta KinalBridge</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={bancapng} height="300px"  className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Banca Movil</h5>
                                    <p className="card-text">Puedes gestionar todo desde la comodidad de tu dispositivo movil.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={tarjetaspng} height="300px"  className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Tecnologia de Ultra Seguridad</h5>
                                    <p className="card-text">Tenemos lo ultimo en tecnologia en la seguridad, para garantizarles tranquilidad a nuestros clientes.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
