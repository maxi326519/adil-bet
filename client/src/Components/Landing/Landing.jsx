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
      <div className="cntpromoinfo">
        <div className="container-image-team">
          <img src={ImageTeam} alt="Team-landing" className="image-landing" />
        </div>
        <div className="container-promo">
          <h3 className="title-promo-landing">¡Super Promo del año!</h3>
          <div className="cntpromo">
            <p className="list-item">CASHBACK por primera recarga</p>
            <p className="list-item">Atencion 24Hs</p>
            <p className="list-item">Excelentes pagas</p>
            <p className="list-item">
              Esto y mucho mas en seccion <br /> de Promociones
            </p>
          </div>
          <a href="/signin">
            <button className="promo-button">
              <p className="text-button">REGISTRATE AQUI!</p>
            </button>
          </a>
        </div>
      </div>
      <hr className="linea" />
      <div className="cntreviews">
        <div className="container-clients-review">
          <h3 className="title-clients">Clientes Satisfechos.</h3>
          <Reviews />
        </div>
        <div>
          <h3 className="text-landing">
            y asi como ellos, tu puedes ser parte de esta experiencia. <br />{" "}
            Animate!
          </h3>
        </div>
      </div>
      <hr className="linea" />

      <div className="createReview">{userData.id ? <ReviewForm /> : null}</div>

      <Footer />
    </div>
  );
}
