import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      {/* Banner principal */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>Tu Tienda de Indumentaria Favorita</h1>
          <p>Explora nuestra última colección de ropa para hombres, mujeres y niños. Estilos y ofertas exclusivas a tu alcance.</p>
          <Link to="/productos" className="btn btn-primary">
            Comprar Ahora
          </Link>
        </div>
        <div className="col-md-6">
          <img src="/assets/home-banner.png" alt="Tienda de indumentaria" className="img-fluid" />
        </div>
      </div>

      {/* Sección de categorías */}
      <div className="row mt-5">
        <h2 className="text-center">Categorías Populares</h2>
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/categoria-hombres.jpg" className="card-img-top" alt="Ropa para Hombres" />
            <div className="card-body">
              <h5 className="card-title">Hombres</h5>
              <Link to="/categoria/hombres" className="btn btn-primary">
                Explorar Hombres
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/categoria-mujeres.jpg" className="card-img-top" alt="Ropa para Mujeres" />
            <div className="card-body">
              <h5 className="card-title">Mujeres</h5>
              <Link to="/categoria/mujeres" className="btn btn-primary">
                Explorar Mujeres
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/categoria-ninos.jpg" className="card-img-top" alt="Ropa para Niños" />
            <div className="card-body">
              <h5 className="card-title">Niños</h5>
              <Link to="/categoria/ninos" className="btn btn-primary">
                Explorar Niños
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de productos destacados */}
      <div className="row mt-5">
        <h2 className="text-center">Productos Destacados</h2>
        <div className="col-md-3">
          <div className="card">
            <img src="/assets/producto1.jpg" className="card-img-top" alt="Producto 1" />
            <div className="card-body">
              <h5 className="card-title">Producto 1</h5>
              <p className="card-text">Descripción breve del producto.</p>
              <Link to="/producto/1" className="btn btn-primary">Ver Detalles</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/assets/producto2.jpg" className="card-img-top" alt="Producto 2" />
            <div className="card-body">
              <h5 className="card-title">Producto 2</h5>
              <p className="card-text">Descripción breve del producto.</p>
              <Link to="/producto/2" className="btn btn-primary">Ver Detalles</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/assets/producto3.jpg" className="card-img-top" alt="Producto 3" />
            <div className="card-body">
              <h5 className="card-title">Producto 3</h5>
              <p className="card-text">Descripción breve del producto.</p>
              <Link to="/producto/3" className="btn btn-primary">Ver Detalles</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/assets/producto4.jpg" className="card-img-top" alt="Producto 4" />
            <div className="card-body">
              <h5 className="card-title">Producto 4</h5>
              <p className="card-text">Descripción breve del producto.</p>
              <Link to="/producto/4" className="btn btn-primary">Ver Detalles</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de ofertas */}
      <div className="row mt-5">
        <h2 className="text-center">Ofertas Especiales</h2>
        <p className="text-center">Descubre nuestras ofertas limitadas.</p>
        <div className="text-center">
          <Link to="/ofertas" className="btn btn-warning">Ver Ofertas</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

