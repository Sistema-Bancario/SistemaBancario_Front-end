import React from 'react'
import tarjetas1png from "../../assets/Tarjetas1.png"
export const Info = () => {
    return (
        <>
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
    )
}