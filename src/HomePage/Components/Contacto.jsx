import React, { useState } from 'react';


const MensajeCliente = () => {
  const [mensaje, setMensaje] = useState('');

  const handleChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el mensaje al servidor o hacer lo que desees con él
    console.log(mensaje);
    setMensaje('');
  };

  return (
    <div className="mensaje-cliente">
      <h2>Envíanos un mensaje</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Escribe tu mensaje aquí"
          value={mensaje}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default MensajeCliente;
