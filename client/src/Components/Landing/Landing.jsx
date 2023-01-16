import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Landing.css";
import ImageTeam from "../../Assets/Images/team.png";
import ImageLanding from "../../Assets/Images/Imagen-landing.png";
import ImageLanding2 from "../../Assets/Images/image-landing2.png";
import ImageLanding3 from "../../Assets/Images/Image-Landing3.png";

export default function Landing() {
  return (
    <div>
      <Nav />
      <div className="body_full">
        <div className="container-all">
          <input type="radio" id="1" name="image-slide" hidden />
          <input type="radio" id="2" name="image-slide" hidden />
          <input type="radio" id="3" name="image-slide" hidden />

          <div className="slide">
            <div className="item-slide">
              <img src={ImageLanding} alt="Slide-1" className="image-slides" />
            </div>

            <div className="item-slide">
              <img src={ImageLanding2} alt="Slide-2" className="image-slides" />
            </div>

            <div className="item-slide">
              <img src={ImageLanding3} alt="Slide-3" className="image-slides" />
            </div>
          </div>

          <div className="pagination">
            <label for="1" className="pagination-item">
              <img src={ImageLanding} alt="Pagination-item1" />
            </label>

            <label for="2" className="pagination-item">
              <img src={ImageLanding2} alt="Pagination-item2" />
            </label>

            <label for="3" className="pagination-item">
              <img src={ImageLanding3} alt="Pagination-item3" />
            </label>
          </div>
        </div>
      </div>
      <div className="second-container">
        <h1 className="text__second-container">¡BIENVENIDOS A ADILBET!</h1>
      </div>
      <div>
        <div className="container-image-team">
          <img src={ImageTeam} alt="Team-landing" className="image-landing" />
          <div className="container-promo">
            <h3 className="title-promo-landing">¡Super Promo del año!</h3>
            <ul className="list-promo-landing">
              <li>Registrate GRATIS!</li>
              <li>
                Beneficios por ser <br /> primera vez!
              </li>
              <li>CASHBACK por primer recarga</li>
              <li>Atencion 24hs</li>
            </ul>
            <a href="/singin">
              <button className="promo-button">
                <p>REGISTRATE AQUI!</p>
              </button>
            </a>
          </div>
        </div>
        <div className="container-clients-review">
          <h3 className="title-clients">Clientes Satisfechos.</h3>
          <div className="container-client">
            <div className="container-card-client">
              <div className="client-header">
                <img
                  src="https://www.soyusuario.ift.org.mx/styles/imagen/Acceso%20Nuevos%20Usuarios_Mesa%20de%20trabajo%201.png"
                  alt="image-client"
                  className="image-client"
                />
                <p className="name-client">Jordy Rodriguez</p>
              </div>
              <p>
                He apostado en esta pagina y ha sido <br /> lo mejor que he
                podido hacer!!!!!
              </p>
            </div>
            <div className="container-card-client">
              <div className="client-header">
                <img
                  src="https://www.soyusuario.ift.org.mx/styles/imagen/Acceso%20Nuevos%20Usuarios_Mesa%20de%20trabajo%201.png"
                  alt="image-client"
                  className="image-client"
                />
                <p className="name-client">Estela Amouranth</p>
              </div>
              <p>
                Nunca habia recibido un pago tan bueno <br /> como cuando aposte
                en esta pagina, increible.
              </p>
            </div>
            <div className="container-card-client">
              <div className="client-header">
                <img
                  src="https://www.soyusuario.ift.org.mx/styles/imagen/Acceso%20Nuevos%20Usuarios_Mesa%20de%20trabajo%201.png"
                  alt="image-client"
                  className="image-client"
                />
                <p className="name-client">Juan Salazar</p>
              </div>
              <p>
                Definitivamente es magnifico tener <br /> la posibilidadde
                apostar tan facil
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-landing">
            y asi como ellos, tu puedes ser parte de esta experiencia. <br />{" "}
            Animate!
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}
