import React from 'react'
import Bancoimg from "../../assets/Banco.png"
import Genteimg from "../../assets/Gente.png"
import paypng from "../../assets/pay.png"
export const Slide = () => {
    return (
        
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
                            <img src={paypng} height="700px"  className="d-block w-100 img-slider" alt="" />
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
       

    )
}
