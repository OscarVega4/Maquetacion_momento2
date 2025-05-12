import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import BuscarCliente from './BuscarCliente';
import BuscarProductos from './BuscarProducto';
import Productos from './Productos';
import ClienteInfo from './ClienteInfo';  


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuscarCliente />} />
        <Route path="/buscar-producto" element={<BuscarProductos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/cliente-info" element={<ClienteInfo />} />
      </Routes>
    </Router>
  );
}

export default App;


