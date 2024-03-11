import React from "react";
import Classess from "./Home.module.css";
import Balance from "../../components/Balance/Balance";
import Impressions from "../../components/Impressions/Impressions";
import Recents from "../../components/Recent/Recents";
const HomeRightContainer = () => {
  return (
    <div className={Classess.homeRightContainer}>
      <Balance amount={"123"} />
      <Impressions impressionsCount={'11-02-2024  32k'}/>
      <Recents/>
    </div>
  );
};

export default HomeRightContainer;
