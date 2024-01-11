import React from "react";

const Call = () => {
  return (
    <div className="container mx-auto min-h-48 mt-32">
      <div className="text-center bg-trucks">
        <div className="text-center uppercase">
          <h3 className="text-neutral-500 text-xl font-bold" data-aos="fade-up">
            Call us now on
          </h3>
          <div className="my-2" data-aos="fade-up" data-aos-delay="150">
            <span className="fa-solid fa-phone-volume text-3xl pr-5 " />
            <a
              href="tel:+1 937-865-6660"
              className="text-yellow-400 text-3xl font-semibold"
            >
              +1 937-865-6660
            </a>
          </div>
          <p
            className="text-xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            we are open 24/7 for assiant
          </p>
        </div>
      </div>
    </div>
  );
};

export default Call;
