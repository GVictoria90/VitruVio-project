import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Carrito from './components/Carrito';
import Navbar from './components/Navbar';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Ofertas from './pages/Ofertas';
import Productos from './pages/Productos';

function App() {


  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact key='home' path="/" element={<Home />} />
          <Route key='productos' path="/productos" element={<Productos />} />
          <Route key='ofertas' path="/ofertas" element={<Ofertas />} />
          <Route key='contacto' path="/contacto" element={<Contacto />} />
          <Route key='carrito' path="/carrito" element={<Carrito />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </Router>
    </>
  )
}

export default App
