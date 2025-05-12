import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClienteInfo.css';

import OscarImagen from './assets/Oscar.png';

function ClienteInfo() {
  const navigate = useNavigate();

  const handleRegresar = () => {
    navigate('/');
  };

  return (
    <div className="cliente-info-container">
      <div className="cliente-info-content">
        <img
          src={OscarImagen}
          alt="Cliente"
          className="cliente-imagen"
        />
        <div className="cliente-detalles">
          <h1>Oscar Acevedo Vega</h1>
          <p>Programación para la WEB II</p>
          <p>Técnico en Desarrollo de Software</p>
          <p>CESDE Bello</p>
          
          
        </div>
      </div>
      <div className="cliente-boton">
        <button onClick={handleRegresar} className="boton-regresar">
          Regresar
        </button>
      </div>
    </div>
  );
}

export default ClienteInfo;

