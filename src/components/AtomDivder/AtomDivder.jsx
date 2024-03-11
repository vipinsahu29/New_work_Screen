import React from "react";

const styles = {
  HorizontalDivider: {
    marginTop: "8px",
    marginBottom: "8px",
    width: "90%",
    height: "1px",
    backgroundColor: "#c2c2c2",
    borderRadius: "2px",
    alignSelf: "center"
  },
  VerticalalDivider: {
    marginLeft: "8px",
    marginRight: "8px",
    height: "90%",
    width: "2.5px",
    backgroundColor: "#c2c2c2",
    borderRadius: "2px",
    position:'absolute'
  },
};
const AtomDivder = ({ isHorizontal = false }) => {
  return (
    <div
      style={isHorizontal ? styles.VerticalalDivider : styles.HorizontalDivider}
    ></div>
  );
};

export default AtomDivder;
