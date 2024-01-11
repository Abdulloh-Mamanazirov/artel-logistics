import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { About, Call, Features, News, Testimonials } from "./sections";

const Home = () => {
  return (
    <div>
      <Carousel />
      <About />
      <Features />
      <News />
      <div className="my-16">
        <Testimonials />
      </div>
      <Call />
    </div>
  );
};

export default Home;
