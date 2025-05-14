import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BuscarCliente.css';

function BuscarCliente() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Obtener usuario guardado
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

    // Verificar credenciales
    if (
      usuarioGuardado &&
      usuario === usuarioGuardado.usuario &&
      contrasena === usuarioGuardado.contrasena
    ) {
      alert('Inicio de sesión exitoso');
      navigate('/productos');  // Redirige a la página de los cursos
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="contenedor">
      <form onSubmit={handleLogin} className="card">
        <h2 className="titulo">Iniciar Sesión</h2>

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

        <button type="submit" className="boton-buscar">Iniciar sesión</button>

        <Link to="/buscar-producto" className="link-producto">
          Registrarse (nuevo Estudiante)
        </Link>
      </form>
    </div>
  );
}

export default BuscarCliente;





