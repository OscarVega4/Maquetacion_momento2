import React from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';

import imagen1 from './assets/imagen1.jpg';
import imagen2 from './assets/imagen2.jpg';
import imagen3 from './assets/imagen3.jpg';
import imagen4 from './assets/imagen4.jpg';
import imagen5 from './assets/imagen5.jpg';
import imagen6 from './assets/imagen6.jpg';

const productos = [
  { id: 1, src: imagen1, alt: 'Producto 1' },
  { id: 2, src: imagen2, alt: 'Producto 2' },
  { id: 3, src: imagen3, alt: 'Producto 3' },
  { id: 4, src: imagen4, alt: 'Producto 4' },
  { id: 5, src: imagen5, alt: 'Producto 5' },
  { id: 6, src: imagen6, alt: 'Producto 6' },
];

function Productos() {
  return (
    <div className="productos-container">
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-item">
            <img src={producto.src} alt={producto.alt} className="producto-imagen" />
            <button className="ver-producto">Ver</button>
          </div>
        ))}
      </div>

      <Link to="/buscar-producto" className="boton-regresar">Regresar</Link>
    </div>
  );
}

export default Productos;



