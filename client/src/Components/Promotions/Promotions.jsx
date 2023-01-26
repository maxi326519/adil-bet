import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from "./Promotions.css";

const items = [
  {
    src: require("../../Assets/Images/beisbol promo 3.jpg"),
    altText: "",
    caption: "",
  },
  {
    src: require("../../Assets/Images/beisbol promo.jpg"),
    altText: "",
    caption: "",
  },
  {
    src: require("../../Assets/Images/beisbol promo 2.png"),
    altText: "",
    caption: "",
  },
  {
    src: require("../../Assets/Images/beisbol promo 4.jpg"),
    altText: "",
    caption: "",
  },
];

const PromotionsCar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
        <div className="carousel__img-container">
          <img className="carousel-img" src={item.src} alt={item.altText} width="100%" height="650"/>
        </div>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className={styles.Promotions}>
      <Nav />
      <div className={styles.content}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default PromotionsCar;
