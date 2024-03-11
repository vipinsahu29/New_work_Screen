import React from "react";
import { BsFillPiggyBankFill } from "react-icons/bs";
const styles = {
  Card: {
    display: "flex",
    flexDirection: "column",
    top: "55px",
    left: "1109px",
    width: "90%",
    height: "160px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    justifyContent: "center",
    alignItems: "center",
    gap: "18px",
    padding:"18px",

  },
  Text: {
    color: "#06367a",
    fontSize: "16px",
    fontFamily: "Work Sans",
    fontWeight: 600,
    lineHeight: "20px",
  },
  Amount: {
    color: '#13264d',
    fontSize: '32px',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    lineHeight: '38px',
  },
  Button: {
    cursor: "pointer",
    top: "178px",
    left: "1165px",
    width: "223px",
    height: "30px",
    padding: "0px 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
    gap: "5px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "40px",
    backgroundColor: "#06367a",
    color: "#ffffff",
    fontSize: "13px",
    fontFamily: "Montserrat",
    fontWeight: 700,
    lineHeight: "14px",
    outline: "none",
  },
};

const Balance = ({ amount }) => {
  return (
    <div style={styles.Card}>
      <label style={styles.Text}>Your balance</label>
      <label style={styles.Amount}>
        {"$ "}
        {amount}
      </label>
      <button style={styles.Button}>
        <BsFillPiggyBankFill size={20}/>
        Top up balance
      </button>
    </div>
  );
};

export default Balance;
