import React from "react";
import Img from "../image/comming-soon.png";
import { HomeContainer, Image } from "../styles/home";

const Home = () => {
  return (
    <HomeContainer>
      <Image src={Img} alt="Coming Soon" />
    </HomeContainer>
  );
};

export default Home;