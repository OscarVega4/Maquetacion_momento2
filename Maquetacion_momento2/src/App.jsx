import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import BuscarCliente from './BuscarCliente';
import BuscarProductos from './BuscarProducto';
import Productos from './Productos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuscarCliente />} />
        <Route path="/buscar-producto" element={<BuscarProductos />} />
        <Route path="/productos" element={<Productos />} /> {/* Ruta correcta para productos */}
        <Route path="/producto/:id" element={<Productos />} /> {/* Ruta dinámica para productos */}
      </Routes>
    </Router>
  );
}

export default App;



