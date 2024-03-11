import React from "react";
import impressionsImg from "../../assets/impressions.png";
const styles = {
  Card: {
    paddingTop:"18px",
    paddingRight:"4px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "150px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    alignItems: "center",
    gap: "8px",
  },
  Text: {
    color: "#06367a",
    fontSize: "16px",
    fontFamily: "Work Sans",
    fontWeight: 600,
    lineHeight: "20px",
  },
  ImgRoot: {
    // position: "absolute",
  },
  ImageContainer: {
    top: "299px",
    width: "270px",
    height: "108px",
    backgroundImage: "url(./image.png)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
  },
  Input: {
    bottom: "89px",
    left: '34px',
    width: "101px",
    height: "25px",
    border: "2px solid #3f779d",
    boxSizing: "border-box",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    color: "#01509a",
    fontSize: "9px",
    fontFamily: "Montserrat",
    fontWeight: 700,
    lineHeight: "12px",
    textAlign: "center",
    outline: "none",
    position: "relative",
    zIndex: 1,
  },
};

const Impressions = ({ impressionsCount }) => {
  return (
    <div style={styles.Card}>
      <label style={styles.Text}>Total impressions</label>
      <div style={styles.ImgRoot}>
        <img style={styles.ImageContainer} src={impressionsImg} />
        <input style={styles.Input} placeholder={impressionsCount} />
      </div>
    </div>
  );
};

export default Impressions;
