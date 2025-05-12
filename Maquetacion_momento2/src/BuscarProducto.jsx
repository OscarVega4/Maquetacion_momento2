import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BuscarProducto.css';

function BuscarProductos() {
  const [codigo, setCodigo] = useState('');
  const navigate = useNavigate(); 

  const handleBuscar = (e) => {
    e.preventDefault();
    
    navigate('/productos');
  };

  return (
    <div className="contenedor">
      <form onSubmit={handleBuscar} className="card">
        <input
          type="text"
          placeholder="Código de producto"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          className="input-correo"
          required
        />
        <button type="submit" className="boton-buscar">Buscar</button>
        <Link to="/" className="link-producto">Buscar Clientes</Link>

      </form>
      <h2 className="titulo">Buscar Producto</h2>
    </div>
  );
}

export default BuscarProductos;

