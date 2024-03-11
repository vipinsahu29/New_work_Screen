import React from "react";
import Classess from "./Card.module.css";
import Videos from "../../assets/videos1.mp4";
const Card = ({ imageUrl, city, area, price }) => {
  const playMovie = (e) => {
    e.target.play();
  };

  const stopMovie = (e) => {
    e.target.pause();
  };
  return (
    <div className={Classess.card}>
    
      <video
        src={Videos}
        className={Classess.image}
        poster={imageUrl}
        onMouseOver={playMovie}
        onMouseOut={stopMovie}
      />
      <div className={Classess.textContainer}>
        <p className={Classess.city}>{city}</p>
        <p className={Classess.area}>{area}</p>
        <div className={Classess.priceContainer}>
          <p className={Classess.price}>Base price</p>
          <p className={Classess.price}>
            {"$ "}
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
