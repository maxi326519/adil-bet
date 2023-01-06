import React from "react";
import Footer from "../Footer/Footer";
import Nav from '../Nav/Nav';
import "./Landing.css";
import ImageTeam from "./Images/team.png";

export default function Landing() {
  return (
    <div>
      <Nav/>
      <div className="body_full">
        <div className="container-all">
          <input type="radio" id="1" name="image-slide" hidden />
          <input type="radio" id="2" name="image-slide" hidden />
          <input type="radio" id="3" name="image-slide" hidden />

          <div className="slide">
            <div className="item-slide">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg"
                alt="Slide-1"
                className="image-slides"
              />
            </div>

            <div className="item-slide">
              <img
                src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg"
                alt="Slide-2"
                className="image-slides"
              />
            </div>

            <div className="item-slide">
              <img
                src="https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg"
                alt="Slide-3"
                className="image-slides"
              />
            </div>
          </div>

          <div className="pagination">
            <label for="1" className="pagination-item">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg"
                alt="Pagination-item1"
              />
            </label>

            <label for="2" className="pagination-item">
              <img
                src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg"
                alt="Pagination-item2"
              />
            </label>

            <label for="3" className="pagination-item">
              <img
                src="https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg"
                alt="Pagination-item3"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="second-container">
        <h1 className="text__second-container">
          ¡BIENVENIDOS A ADILBET! <br /> la mejor casa de apuestas del mercado
        </h1>
      </div>
      <div className="container-promo-landing">
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
            <a>
              <button className="promo-button">
                <p>REGISTRATE AQUI!</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
