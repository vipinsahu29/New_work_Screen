import React from "react";
import { TbGridDots } from "react-icons/tb";
const styles = {
  Container: {
    marginTop:"30px",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems:"center"
  },
  Button: {
    cursor: 'pointer',
    width: '120px',
    height: '36px',
    padding: '0px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    gap: '15px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '100px',
    backgroundColor: '#06367a',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Work Sans',
    fontWeight: 500,
    lineHeight: '18px',
    outline: 'none',
    marginRight: "30px"
  },
  Input: {
    width: "469px",
    height: "46px",
    padding: "0px 8px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "100px",
    backgroundColor: "#f5f9fd",
    color: "#72a3e8",
    fontSize: "18px",
    fontFamily: "Work Sans",
    lineHeight: "24px",
    outline: "none",
    paddingLeft: "30px",
  },
};

const placeHolderItem = "<p>Search</p>";

const SearchBoxButton = () => {
  return (
    <div style={styles.Container}>
      <input style={styles.Input} placeholder={"Search"} />
      <button style={styles.Button}><TbGridDots size={15} style = {{transform: 'rotate(45deg)' }}/>{"  Publish"}</button>
    </div>
  );
};

export default SearchBoxButton;
