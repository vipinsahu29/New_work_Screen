import React from "react";
import AtomText from "../../components/AtomText/AtomText";
import classess from "./Home.module.css";
import TopAdvStory from "../../components/Story/TopAdvStory";
import { images } from "../../constants/imageData";
import Card from "../../components/card/Card";
import SearchBoxButton from "../../components/SearchBox/SearchBoxButton";
const HomeMiddleContainer = () => {
  return (
    <div className={classess.homeMiddleContainer}>
    <SearchBoxButton/>
      <AtomText>Top advertiser</AtomText>
      <div className={classess.storyContainer}>
        {images.map((items, index) => (
          <TopAdvStory imageUrl={items.image} id={index} key={index} />
        ))}
      </div>
      <AtomText>Trending screens</AtomText>
      <div className={classess.cardContainer}>
        {images.map((items, index) => (
          <Card imageUrl={items.image} key={index} city="Pune" area="wakad" price='123'/>
        ))}
      </div>
      <AtomText>Near by screens</AtomText>
      <div className={classess.cardContainer}>
        {images.map((items, index) => (
          <Card imageUrl={items.image} key={index} city="Pune" area="wakad" price='123'/>
        ))}
      </div>
    </div>
  );
};

export default HomeMiddleContainer;
