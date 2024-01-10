import React from "react";
import ServiseImage from "../../assets/cns-giftreturn.jpg";
import { services } from "../../constants";

const Servisec = () => {
  return (
    <div className="container md:w-10/12 mx-auto">
      <div className="text-center">
        <h1 className="text-3xl text-[#333366] my-10 font-medium">
          Featured Artel Logistics® Products & Services
        </h1>
      </div>
      {Array.isArray(services) &&
        services.map((item, i) => {
          return (
            <div
              key={i}
              className="service-flex-reverse my-10 flex items-start justify-center relative"
            >
              <div className="service-wrapper-div w-full md:w-1/2 relative -right-12 md:top-16">
                <div className="bg-[#337AB7] py-10 px-3 text-center -skew-x-12 ">
                  <h1 className="text-2xl md:text-4xl font-semibold text-white skew-x-12">
                    {item.title}
                  </h1>
                </div>
                <div className="md:mx-20 mt-4">
                  <p className="text-sm md:text-base text-[#333366] font-semibold w-fit">
                    {item.des}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={item.img}
                  alt="image of servises"
                  className="w-full h-96  object-cover"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Servisec;
