import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter as Router, Switch, Route, NavLink,Link} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faDollarSign, faMedal, faStar} from '@fortawesome/free-solid-svg-icons'

library.add( faHome, faPhone , faDollarSign, faMedal, faStar)

const App = () =>(
  <>
    <Router>
      <div id="contenedor">
        <nav id="navegacion">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected"><FontAwesomeIcon icon={faHome} /></NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName="selected"><FontAwesomeIcon icon={faPhone} /></NavLink>
            </li>
            <li>
              <NavLink to="/precios" activeClassName="selected"><FontAwesomeIcon icon={faDollarSign} /></NavLink>
            </li>
            <li>
              <NavLink to="/calificaciones" activeClassName="selected"><FontAwesomeIcon icon={faMedal} /></NavLink>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contacto">
          <Contacto/>
        </Route>
        <Route path="/precios">
          <Precios />
        </Route>
        <Route path="/calificaciones">
          <Calificaciones />
        </Route>        
      </Switch>
    </div>
  </Router>
  <Footer/>
  </>
  );

const Home = () =>
  <>
    <h2>Bienvenido</h2>

    <img id="logoimg" alt="logo" src="infinitycleanlogo.png" />
    
    <p>Infinity Clean es la empresa de servicios de limpieza con más de 30 años en el rubro de la higiene en espacios públicos y privados. Pongase en contacto con nosotros para poder solicitar su próximo presupuesto.</p>

    <p>Puede ver las calificaciones de nuestros clientes para comprobar la calidad de nuestros servicios en la pestaña de "Calificaciones". Puede consultarnos todas sus dudas en la pestaña de "Contacto" o consultar directamente el valor de nuestros productos en la sección de "Precios"</p>

    <p>¡Tenemos promociones para usted!</p>
  </>;

const Contacto = () =>(
  <>
    <h2>Contacto</h2>
    <p>Complete el formulario y nos pondremos en contacto con usted a la brevedad.</p>
    <form>
      <div className="input-group">
        <span className="input-group-text">Nombre y Apellido</span>
        <input type="text" aria-label="First name" className="form-control"/>
        <input type="text" aria-label="Last name" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Dirección de E-mail</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">No vamos a compartir su dirección de e-mail con nadie.</div>
      </div>
      <label id="birthday">Fecha de Nacimiento</label>
      <br/>
      <input type="date" id="birthday" />
      <br/>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  </>
);
const Calificaciones = () =>
<>
  <h2>Calificaciones</h2>
  <div id="ratings">
    <div className="rating">
      <p>- <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> - </p>
      <p><i>Con Infinity Clean tengo la tranquilidad de que todas mis oficinas estén en buenas condiciones. Mis empleados están contentos por la higiene de su ámbito de trabajo. Muy recomendable</i></p>
      <p><small>Marcos Galperin, CEO Mercadolibre</small></p>
    </div>
    <div className="rating">
      <p>- <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> - </p>
      <p><i>Yo contraté Infinity clean para la limpieza de mis perros. Una amiga me lo recomendó. Son muy eficaces. Vinieron a casa y en 2 horas pudieron bañar a mis mascotas</i></p>
      <p><small>Juana de Boedo</small></p>
    </div>
    <div className="rating">
      <p>- <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar}/> -</p>
      <p><i>Desde que soy directora de este prestigioso teatro, contraté siempre a esta empresa. Estoy muy satisfecha con su servicio de limpieza de alfombras y también con lo detallistas y cuidadosos que son sus empleados.</i></p>
      <p><small>María Victoria Alcaraz ,directora del Teatro Colón</small></p>
    </div>
  </div>  
</>

const Precios = () =>
  <> 
    <h2>Productos y Servicios</h2>
    <div id="productos1">
      <div className="card">
        <img src="https://via.placeholder.com/400x200/7733ff/FFFFFF/.jpg?text=Inmuebles" className="card-img-top" alt="prodimg"/>
        <div className="card-body">
          <h5 className="card-title">Limpieza Completa de Vivienda</h5>
          <p className="card-text">Ya sea para su vivienda personal diaria o para la venta de un inmueble, Infinity Clean se ocupa de la higiene completa de su casa o departamento.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Limpieza de pisos y muebles integrados</li>
          <li className="list-group-item">Servicio por unica vez o diario (especificar)</li>
          <li className="list-group-item">Entre $15000 a $50000 ≈</li>
        </ul>
        <div className="card-body">
          <Link to="/contacto" className="card-link">Pedir Presupuesto</Link>
          <Link to="/" className="card-link">Home</Link>
        </div>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/400x200/008080/ffffff/.jpg?text=Empresas" className="card-img-top" alt="prodimg"/>
        <div className="card-body">
          <h5 className="card-title">Mantenimiento de Oficinas</h5>
          <p className="card-text">Nosotros nos encargamos de mantener la higiene integral de su oficina. Como todos nuestros sevicios, puede solicitar un mantenimiento periódico. </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Limpieza de alfombrados</li>
          <li className="list-group-item">Control de máquinas expendedoras de café/snacks</li>
          <li className="list-group-item">Entre $10000 a $30000 ≈</li>
        </ul>
        <div className="card-body">
          <Link to="/contacto" className="card-link">Pedir Presupuesto</Link>
          <Link to="/" className="card-link">Home</Link>
        </div>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/400x200/009933/ffffff/.jpg?text=Plagas" className="card-img-top" alt="prodimg"/>
        <div className="card-body">
          <h5 className="card-title">Control de Plagas</h5>
          <p className="card-text">Nos ocupamos de la desinsectacón de su hogar y su empresa. Lidiamos con todo tipo de insectos y alimanias. Consulte por nuestro servicio.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Exterminación de Ratas, cucarachas, hormigas, etc.</li>
          <li className="list-group-item">Entre $20000 a $50000 ≈</li>
          <li className="list-group-item"><strong>¡Oferta! ¡30% de descuento!</strong></li>
        </ul>
        <div className="card-body">
          <Link to="/contacto" className="card-link">Pedir Presupuesto</Link>
          <Link to="/" className="card-link">Home</Link>
        </div>
      </div>
    </div>

    <div id="productos2">
      <div className="card">
        <img src="https://via.placeholder.com/400x200/994d00/ffffff/.jpg?text=Mascotas" className="card-img-top" alt="prodimg"/>
        <div className="card-body">
          <h5 className="card-title">Higiene para Perros y Gatos</h5>
          <p className="card-text">En Infinity Clean nos ocupamos del bienestar de tus amigos peludos. La limpieza se puede hacer en cualquiera de nuestros locales pet-friendly o nos acercamos a su domicilio.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Peluquería canina/felina</li>
          <li className="list-group-item">Corte de uñas</li>
          <li className="list-group-item">Entre $500 a $1500 ≈</li>
        </ul>
        <div className="card-body">
          <Link to="/contacto" className="card-link">Pedir Presupuesto</Link>
          <Link to="/" className="card-link">Home</Link>
        </div>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/600x300/00e68a/ffffff/.jpg?text=Jardin" className="card-img-top" alt="prodimg"/>
        <div className="card-body">
          <h5 className="card-title">Mantenimiento de parques/jardines</h5>
          <p className="card-text">¡No se desgaste más en mantener su jardín! No importa si es un gran parque o un pequeño jardín, nos encargamos de conservar la frescura de estos y que solo tenga que disfrutarlos.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Corte de cesped y riego continuo de plantas</li>
          <li className="list-group-item">Control de malezas y plagas.</li>
          <li className="list-group-item">Entre $1000 a $3000 ≈</li>
        </ul>
        <div className="card-body">
          <Link to="/contacto" className="card-link">Pedir Presupuesto</Link>
          <Link to="/" className="card-link">Home</Link>
        </div>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/400x200/cc0000/FFFFFF/.jpg?text=Escuelas" className="card-img-top" alt="prodimg"/>
        <div className="card-body">
          <h5 className="card-title">Institutos privados o públicos</h5>
          <p className="card-text">Mantenemos limpio los lugares de alto tránsito en su institución.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Limpieza de baños y aulas</li>
          <li className="list-group-item">Manejo de los desechos humedos y reciclables</li>
          <li className="list-group-item">Entre $30000 a $100000 ≈</li>
        </ul>
        <div className="card-body">
          <Link to="/contacto" className="card-link">Pedir Presupuesto</Link>
          <Link to="/" className="card-link">Home</Link>
        </div>
      </div>
    </div>
  </>

const Footer =() => <footer><i>Webpage made by <strong>Diana</strong>, Buenos Aires - 2021</i></footer>


ReactDOM.render(<App />,document.getElementById('root'));