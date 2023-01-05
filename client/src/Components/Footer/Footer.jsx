import React from "react";
import { Link } from "react-router-dom";
import logos from './Images/logo.png'
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <h2 className="title-footer">Adilbet ©</h2>
      <ul className="list-footer">
        <li className="list-item-footer">
          <Link to="/404" className="list-item-footer">
            Acerca de nosotros.
          </Link>
        </li>
        <li className="list-item-footer">
          <Link to="/404" className="list-item-footer">
            Terminos y condiciones.
          </Link>
        </li>
        <li className="list-item-footer">
          <Link to="/404" className="list-item-footer">
            Politica y privacidad.
          </Link>
        </li>
        <li className="list-item-footer">
          <Link to="/404" className="list-item-footer">
            Quejas y reclamos.
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/404" className="list-item-footer">
          <img
            src="https://www.sistemaimpulsa.com/blog/wp-content/uploads/2019/12/facebook-logo-redondo-PNG.png"
            alt="logo facebook"
            className="logo-social-footer"
          />
        </Link>
        <Link to="/404" className="list-item-footer">
          <img
            src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/033fd-logo-instagram-icon.png?fit=512%2C512&ssl=1"
            alt="logo instagram"
            className="logo-social-footer"
          />
        </Link>
      </div>
      <div>
        <img src={logos} alt="logos" className="logos-payment-footer"/>
      </div>
      <p className="text-footer">
        Nos reservamos todos los derechos de autor y de identidad.
      </p>
      <p className="text-footer">Gracias por preferirnos.</p>
    </div>
  );
}
