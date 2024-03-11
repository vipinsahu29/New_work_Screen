import { useEffect, useState } from "react";
import AtomDivider from "../AtomDivder/AtomDivder";
import { images } from "../../constants/imageData";
import { FaEye } from "react-icons/fa";
const styles = {
  Card: {
    display: "flex",
    width: "100%",
    paddingBottom: "12px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    gap: "8px",
    paddingTop: "18px",
    flexDirection: "column",
    marginLeft: "10px",
    marginRight: "10px",
  },
  Heading: {
    color: "#06367a",
    fontSize: "20px",
    fontFamily: "Inter",
    fontWeight: 700,
    lineHeight: "24px",
    alignSelf: "center",
    paddingBottom: "10px",
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fffff",
    cursor: "pointer",
  },
  ButtonSelected: {
    height: "25px",
    backgroundColor: "#06367a",
    borderRadius: "20px",
    margin: "8px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 700,
    lineHeight: "18px",
  },
  ButtonNotSelected: {
    height: "25px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    border: "none",
    margin: "8px",
    color: "#5d5d5b",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 500,
    lineHeight: "18px",
  },
  ItemBox: {
    display: "flex",
    flexDirection: "column",
    width: "293px",
    height: "73px",
    borderRadius: "4px",
    border: "0px solid #505050",
    boxSizing: "border-box",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.12)",
    alignSelf: "center",
    justifyContent: "center",
    padding: "12px",
    gap: "10px",
  },
  textActive: {
    color: "#5d5d5b",
    fontSize: "12px",
    fontFamily: "Inter",
    fontWeight: 500,
    lineHeight: "16px",
  },
  imgStyle: {
    width: "35px",
    height: "36px",
    borderRadius: "10000px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    backgroundImage: "url(./image.jpeg)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  imageContainer: {
    display: "flex",
    paddingBottom: "8px",
    gap: "8px",
  },
  nameText: {
    color: "#080a0b",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 700,
    lineHeight: "22px",
  },
  locationText: {
    color: "#5d5d5b",
    fontSize: "12px",
    fontFamily: "Inter",
    fontWeight: 500,
    lineHeight: "16px",
  },
  subHeading: {
    color: "#5d5d5b",
    fontSize: "12px",
    fontFamily: "Inter",
    fontWeight: 500,
    lineHeight: "16px",
  },
  views: {
    color: "#06367a",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 700,
    lineHeight: "18px",
    justifyContent: "flex-end",
  },
  ButtonSeeAll: {
    marginTop: "10px",
    cursor: "pointer",
    width: "90px",
    height: "22px",
    padding: "0px 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
    gap: "5px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "100px",
    backgroundColor: "#06367a",
    color: "#ffffff",
    fontSize: "10px",
    fontFamily: "Work Sans",
    fontWeight: 500,
    lineHeight: "13px",
    outline: "none",
    alignSelf: "center",
  },
};

const Recents = () => {
  const buttons = ["All", "Active", "Upcoming", "Inactive"];
  const [selectedItem, isSelectedItem] = useState("All");
  const [recentData, setRecentData] = useState(images.slice(0, 5));

  const buttonHandler = (item) => {
    isSelectedItem(item);
    if (item === "All") {
      setRecentData(images.slice(0, 5));
    } else {
      setRecentData(() =>
        images.filter((data) => data.isActive === item).slice(0, 5)
      );
    }
  };

  return (
    <div style={styles.Card}>
      <label style={styles.Heading}>Recents</label>
      <div style={styles.ButtonContainer}>
        {buttons.map((items, index) => (
          <button
            style={
              selectedItem === items
                ? styles.ButtonSelected
                : styles.ButtonNotSelected
            }
            key={index}
            onClick={() => buttonHandler(items)}
          >
            {items}
          </button>
        ))}
      </div>
      <AtomDivider />
      {recentData.map((items, index) => (
        <div style={styles.ItemBox} key={index}>
          <lable style={styles.textActive}>{items.isActive}</lable>
          <div style={styles.imageContainer}>
            <img src={items.image} style={styles.imgStyle}></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "20px",
              }}
            >
              <label style={styles.nameText}>{items.name}</label>
              <label style={styles.subHeading}>{items.location}</label>
            </div>
            <div
              style={{
                display: "flex",
                paddingLeft: "190px",
                gap: "8px",
                position: "absolute",
              }}
            >
              <label style={styles.views}>{"93.2k"}</label>
              <FaEye size={15} color={"#06367a"} />
            </div>
          </div>
        </div>
      ))}
      <button style={styles.ButtonSeeAll}>See all</button>
    </div>
  );
};

export default Recents;
