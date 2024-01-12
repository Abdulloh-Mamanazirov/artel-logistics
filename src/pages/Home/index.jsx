import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { About, Call, Features, News, Testimonials, Vacancy } from "./sections";

const Home = () => {
  return (
    <div>
      <Carousel />
      <About />
      <Features />
      <Vacancy />
      <News />
      <div className="my-16">
        <Testimonials />
      </div>
      <Call />
    </div>
  );
};

export default Home;
