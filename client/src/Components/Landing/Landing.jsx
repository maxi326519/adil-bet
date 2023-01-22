import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Landing.css";
import ImageTeam from "../../Assets/Images/team.png";
import ImageLanding from "../../Assets/Images/Imagen-landing.png";
import ImageLanding2 from "../../Assets/Images/image-landing2.png";
import ImageLanding3 from "../../Assets/Images/Image-Landing3.png";
import Reviews from "./Reviews/Reviews";
import ReviewForm from "./Reviews/ReviewForm";
import { useSelector } from "react-redux";

export default function Landing() {
  const userData = useSelector((state) => state.userDates);

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
              <img src={ImageLanding} alt="Slide-1" className="image-slides" width="100%" height="100%"/>
            </div>

            <div className="item-slide">
              <img src={ImageLanding2} alt="Slide-2" className="image-slides" width="100%" height="100%"/>
            </div>

            <div className="item-slide">
              <img src={ImageLanding3} alt="Slide-3" className="image-slides" width="100%" height="100%"/>
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
              <li>Regístrate GRATIS!</li>
              <li>
                Beneficios por ser <br /> primera vez!
              </li>
              <li>CASHBACK por primer recarga</li>
              <li>Atención 24hs</li>
            </ul>
            <a href="/singin">
              <button className="promo-button">
                <p>REGÍSTRATE AQUÍ!</p>
              </button>
            </a>
          </div>
        </div>
        <div className="container-clients-review">
          <h3 className="title-clients">Clientes Satisfechos</h3>
          <Reviews />
        </div>
        <div>
          <h3 className="text-landing">
            y así como ellos, tú puedes ser parte de esta experiencia. <br />{" "}
            Anímate!
          </h3>
        </div>
      </div>

      <div className="createReview">{userData.id ? <ReviewForm /> : null}</div>

      <Footer />
    </div>
  );
}
