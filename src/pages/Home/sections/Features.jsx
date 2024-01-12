import React, { useEffect, useState } from "react";
import { HOME_SERVICES } from "../../../constants";
import { useSelector } from "react-redux";

const Features = () => {
  const language = useSelector((state) => state.language.lang);
  const [titles, setTitles] = useState({
    title: `title_${language}`,
    card_desc: `desc_${language}`,
  });

  useEffect(() => {
    setTitles({
      title: `title_${language}`,
      card_desc: `desc_${language}`,
    });
  }, [language]);

  return (
    <div className="container mx-auto mb-20 mt-32">
      <div className="text-center">
        <h1
          className="text-2xl md:text-5xl text-secondary font-bold uppercase"
          data-aos="fade-up"
        >
          {HOME_SERVICES[titles.title]}
        </h1>
        <div className="h-2 bg-orange-400 w-11/12 mx-auto my-2" />
        <br />
        <div className="my-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="w-full px-4 mb-20 lg:mb-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="relative h-full px-6 pt-20 pb-12 text-center shadow-md ">
                <div className="absolute top-0 inline-flex items-center justify-center w-20 h-20 shadow-md text-red-600 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full ">
                  <sapn className="fa-solid fa-truck text-3xl" />
                </div>
                <h2 className="mb-6 text-xl font-bold uppercase">
                  {HOME_SERVICES.card1[titles.title]}
                </h2>
                <h3 className="mb-6 text-sm text-text font-medium ">
                  {HOME_SERVICES.card1[titles.card_desc]}
                </h3>
              </div>
            </div>
            <div
              className="w-full px-4 mb-20 lg:mb-0"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="relative h-full px-6 pt-20 pb-12 text-center shadow-md  ">
                <div className="absolute top-0 inline-flex items-center justify-center w-20 h-20 shadow-md text-red-600 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full  -700  left-1/2 ">
                  <span className="fa-solid fa-user-group text-3xl" />
                </div>
                <h2 className="mb-6 text-xl font-bold uppercase">
                  {HOME_SERVICES.card2[titles.title]}
                </h2>
                <h3 className="mb-6 text-sm text-text font-medium ">
                  {HOME_SERVICES.card2[titles.card_desc]}
                </h3>
              </div>
            </div>
            <div
              className="w-full px-4 mb-20 lg:mb-0"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="relative h-full px-6 pt-20 pb-12 text-center shadow-md ">
                <div className="absolute top-0 inline-flex items-center justify-center w-20 h-20 shadow-md text-red-600 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full  -700  left-1/2 ">
                  <span className="fa-solid fa-location-dot text-2xl" />
                </div>
                <h2 className="mb-6 text-xl font-bold uppercase">
                  {HOME_SERVICES.card3[titles.title]}
                </h2>
                <h3 className="mb-6 text-sm text-text font-medium ">
                  {HOME_SERVICES.card3[titles.card_desc]}
                </h3>
              </div>
            </div>
            <div
              className="w-full px-4 mb-20 lg:mb-0"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="relative h-full px-6 pt-20 pb-12 text-center shadow-md ">
                <div className="absolute top-0 inline-flex items-center justify-center w-20 h-20 text-red-600 shadow-md transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full  -700  left-1/2 ">
                  <span className="fa-solid fa-flag text-3xl" />
                </div>
                <h2 className="mb-6 text-xl font-bold uppercase">
                  {HOME_SERVICES.card4[titles.title]}
                </h2>
                <h3 className="mb-6 text-sm text-text font-medium ">
                  {HOME_SERVICES.card4[titles.card_desc]}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
