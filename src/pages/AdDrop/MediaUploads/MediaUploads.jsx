import React, { useState } from "react";
import classess from "./MediaUploads.module.css";
import MeadiaHeading from "../../../components/MediaHeading";
const styles = {
  ButtonContainer: {
    // paddingTop: "10px",
    display: "flex",
    // justifyContent: "space-between",
    color: "#fffff",
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
    cursor: "pointer",
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
    cursor: "pointer",
  },
  sortBy: {
    marginRight: "20px",
  },
};
const MediaUploads = () => {
  const buttons = ["All", "Videos", "GIF", "Images", "Favourite"];
  const [selectedItem, setSelectedItem] = useState("All");
  return (
    <div className={classess.root}>
      <div className={classess.container}>
        <MeadiaHeading text={"Media"} />
        <div
          style={{
            display: "flex",
            paddingTop: "10px",
            alignItem: "center",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={styles.ButtonContainer}>
            {buttons.map((items, index) => (
              <button
                style={
                  selectedItem === items
                    ? styles.ButtonSelected
                    : styles.ButtonNotSelected
                }
                key={index}
                onClick={() => setSelectedItem(items)}
              >
                {items}
              </button>
            ))}
          </div>
          <div style={styles.sortBy}>sort</div>
        </div>
      </div>
      <div style={{width:'300px'}}>
      right container
      </div>
    </div>
  );
};

export default MediaUploads;
