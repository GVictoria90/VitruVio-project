import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div id="root">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/ofertas">Ofertas</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
        </ul>
      </nav>

      <Outlet /> {/* Aquí se renderizan las rutas hijas */}
    </div>
  );
}

export default Layout;
