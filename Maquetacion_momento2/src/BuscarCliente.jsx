import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BuscarCliente.css';

function BuscarCliente() {
  const [correo, setCorreo] = useState('');
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    navigate('/cliente-info');
  };

  return (
    <div className="contenedor">
      <form onSubmit={handleBuscar} className="card">
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="input-correo"
          required
        />
        <button type="submit" className="boton-buscar">Buscar</button>
        <Link to="/buscar-producto" className="link-producto">Buscar producto</Link>
      </form>
      <h2 className="titulo">Buscar Cliente</h2>
    </div>
  );
}

export default BuscarCliente;




