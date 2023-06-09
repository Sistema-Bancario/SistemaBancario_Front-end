import React from "react";
import Bancoimg from "./assets/Banco.png"
import Genteimg from "./assets/Gente.png"
import paypng from "./assets/pay.png"
import puntospng from "./assets/Puntos.png"
import bancapng from "./assets/banca.png"
import tarjetaspng from "./assets/Tarjetas.png"
import tarjetas1png from "./assets/Tarjetas1.png"

export const HomePage = () => {

    return (
        <>
            <div className='container'>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Bancoimg} height="700px" className="d-block w-100 img-slider" alt="" />
                            <div className='text-img'><span className='text-hero'><p>Contamos con multiples agencias en todo el país, visitanos cuando tu desees.</p>
                                <p>Estamos al alcanse de todos, visitanos en tu centro mas cercano. KinalBridge a tu alcance.</p></span></div>
                        </div>
                        <div className="carousel-item">
                            <img src={Genteimg} height="700px" className="d-block w-100 img-slider" alt="" />
                            <div className='text-img'><span className='text-hero'><p>Contamos con el mejor servicio al cliente que puedas imaginar.</p>
                                <p>Todos nuestros colaboradores son 100% capacitados para brindarles la atencion que ustedes merecen.</p></span></div>
                        </div>
                        <div className="carousel-item">
                            <img src={paypng} height="700px" className="d-block w-100 img-slider" alt="" />
                            <div className='text-img'><span className='text-hero'><p>Ya contamos con el servicio de Apple pay!!!</p>
                                <p>Una de las formas mas seguras de pago, disponible con dispositivos Ios 12</p></span></div>
                        </div>
                    </div>
                    <button className="carousel-control-prev slider-button" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next slider-button" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <br />
            <div className='container'>
                <h2>Beneficios Exclusivos de KinalBridge</h2>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={puntospng} height="300px" className="card-img-top" alt="..." />
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
                            <img src={bancapng} height="300px" className="card-img-top" alt="..." />
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
                            <img src={tarjetaspng} height="300px" className="card-img-top" alt="..." />
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

            <br />
            <div className='container'>
                <div className="clearfix">
                    <h2>Tu banco Digital</h2>
                    <img src={tarjetas1png} className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />

                    <p>
                        ¡La Tarjeta con la que recibes más! Acumula 5% de Walmart Cash por cada compra que realices en Walmart, Paiz, Maxi Despensa y Despensa Familiar. Además aprovecha los exclusivos beneficios que te ofrecemos como promociones mensuales y membresía sin costo. Y recuerda cuando compres productos electrónicos en Walmart y Maxi Despensa te duplicamos la garantía hasta por 12 meses dependiendo de la categoría de tu tarjeta.
                    </p>

                    <p>
                        ¿Sabías que ya no necesitas tener 2 apps para realizar tus transacciones?  Pensamos en ti y ahora todo lo encuentras en un solo lugar, donde podrás generar tu código de seguridad y realizar tus pagos y transferencias en segundos.
                    </p>

                    <p>
                        Sabemos lo importante que son para ti tus mascotas, por eso, velamos porque cada integrante de tu familia esté a salvo y tenga una vida plena. Aprovecha los beneficios que puedes obtener con esta protección para mascotas, como las consultas veterinarias, hospedajes o servicios de grooming para tu amigo.
                    </p>
                </div>
            </div>
            <br />
        </>
    );
};
