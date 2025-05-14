import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Productos.css';

import imagen7 from './assets/imagen7.avif';  // Aquí se importa la imagen

const productos = [
  { 
    id: 1, 
    src: imagen7, 
    alt: 'Curso 1', 
    cursos: ['Lógica de programación'] 
  },
  { 
    id: 2, 
    src: imagen7, 
    alt: 'Curso 2', 
    cursos: ['JavaScript'] 
  },
  { 
    id: 3, 
    src: imagen7, 
    alt: 'Curso 3', 
    cursos: ['Python'] 
  },
  { 
    id: 4, 
    src: imagen7, 
    alt: 'Curso 4', 
    cursos: ['Java'] 
  },
  { 
    id: 5, 
    src: imagen7, 
    alt: 'Curso 5', 
    cursos: ['C#'] 
  },
  { 
    id: 6, 
    src: imagen7, 
    alt: 'Curso 6', 
    cursos: ['PHP'] 
  },
];

function Productos() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID del curso desde la URL

  const cursoSeleccionado = productos.find((producto) => producto.id === parseInt(id));

  const verCurso = (id) => {
    navigate(`/producto/${id}`);  // Redirige a la página de detalles del curso
  };

  const cerrarSesion = () => {
    navigate('/');  // Redirige a la vista de BuscarCliente (inicio de sesión)
  };

  return (
    <div className={`productos-container ${id ? 'detalle-curso' : ''}`}>
      <h2 className="titulo">Cursos disponibles</h2>
      <div className="productos-grid">
        {id ? (
          <div className="producto-detalle">
            <img src={cursoSeleccionado?.src} alt={cursoSeleccionado?.alt} />
            <h3>{cursoSeleccionado?.alt}</h3>
            <ul className="descripcion">
              {cursoSeleccionado?.cursos.map((curso, index) => (
                <li key={index}>{curso}</li>
              ))}
            </ul>
            <button className="boton-regresar" onClick={() => navigate('/productos')}>
              Regresar a cursos
            </button>
          </div>
        ) : (
          productos.map((producto) => (
            <div key={producto.id} className="producto-item">
              <img src={producto.src} alt={producto.alt} className="producto-imagen" />
              <ul className="descripcion">
                {producto.cursos.map((curso, index) => (
                  <li key={index}>{curso}</li>
                ))}
              </ul>
              <button className="ver-producto" onClick={() => verCurso(producto.id)}>
                Ver
              </button>
            </div>
          ))
        )}
      </div>

      {/* Botón de cerrar sesión */}
      {!id && (
        <button className="cerrar-sesion" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      )}
    </div>
  );
}

export default Productos;



