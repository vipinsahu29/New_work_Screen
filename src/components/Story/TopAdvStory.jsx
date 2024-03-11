import React from "react";
import classess from "./TopAdStory.module.css";
const TopAdvStory = ({ imageUrl, id = 0 }) => {
  return (
      <div className={classess.container} key={id}>
        <img src={imageUrl} className={classess.imageContainer} />
      </div>
  );
};

export default TopAdvStory;
