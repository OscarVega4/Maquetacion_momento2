import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BuscarProducto.css';

function BuscarProductos() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');

  const handleRegistro = (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      usuario,
      contrasena,
      nombreCompleto,
      correo,
    };

    // Guardar usuario en localStorage
    localStorage.setItem('usuarioRegistrado', JSON.stringify(nuevoUsuario));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');

    // Limpiar formulario
    setUsuario('');
    setContrasena('');
    setNombreCompleto('');
    setCorreo('');
  };

  return (
    <div className="contenedor">
      <form onSubmit={handleRegistro} className="card">
        <h2 className="titulo">Registro de Usuario</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="input-correo"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="input-correo"
          required
        />

        <input
          type="text"
          placeholder="Nombre Completo"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          className="input-correo"
          required
        />

        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="input-correo"
          required
        />

        <button type="submit" className="boton-buscar">Registrarme</button>

        <Link to="/" className="link-producto">Login</Link>
      </form>
    </div>
  );
}

export default BuscarProductos;




