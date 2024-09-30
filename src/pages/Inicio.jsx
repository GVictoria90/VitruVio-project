import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="container mt-5">
      {/* Sección de bienvenida */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>Bienvenido a VitruVio</h1>
          <p>Descubre nuestra amplia colección de ropa, con ofertas exclusivas y estilos para cada ocasión.</p>
          <Link to="/productos" className="btn btn-primary">
            Ver Productos
          </Link>
        </div>
        <div className="col-md-6">
          <img src="/assets/home-banner.png" alt="Banner de indumentaria" className="img-fluid" />
        </div>
      </div>

      {/* Sección de productos destacados */}
      <div className="row mt-5">
        <h2 className="text-center">Productos Destacados</h2>
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/producto1.jpg" className="card-img-top" alt="Producto 1" />
            <div className="card-body">
              <h5 className="card-title">Producto 1</h5>
              <p className="card-text">Descripción breve del producto 1.</p>
              <Link to="/producto/1" className="btn btn-primary">
                Ver Detalles
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/producto2.jpg" className="card-img-top" alt="Producto 2" />
            <div className="card-body">
              <h5 className="card-title">Producto 2</h5>
              <p className="card-text">Descripción breve del producto 2.</p>
              <Link to="/producto/2" className="btn btn-primary">
                Ver Detalles
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/producto3.jpg" className="card-img-top" alt="Producto 3" />
            <div className="card-body">
              <h5 className="card-title">Producto 3</h5>
              <p className="card-text">Descripción breve del producto 3.</p>
              <Link to="/producto/3" className="btn btn-primary">
                Ver Detalles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de ofertas */}
      <div className="row mt-5">
        <h2 className="text-center">Ofertas Exclusivas</h2>
        <p className="text-center">No te pierdas nuestras promociones y descuentos limitados.</p>
        <div className="text-center">
          <Link to="/ofertas" className="btn btn-warning">
            Ver Ofertas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;




