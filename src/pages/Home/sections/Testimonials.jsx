import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Driver1, Driver2, Driver3 } from "../../../assets";
import { HOME_TESTIMONIALS } from "../../../constants";

import "swiper/css";
import "swiper/css/effect-cards";

const Testimonials = () => {
  const language = useSelector((state) => state.language.lang);
  const [titles, setTitles] = useState({
    title: `title_${language}`,
    desc: `desc_${language}`,
  });

  useEffect(() => {
    setTitles({
      title: `title_${language}`,
      desc: `desc_${language}`,
    });
  }, [language]);

  return (
    <div className="container mx-auto w-[80%]">
      <div className="flex items-center ">
        <div className="p-4 mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h1 className="mb-4 text-3xl font-bold " data-aos="fade-up">
              {HOME_TESTIMONIALS[titles.title]}
            </h1>
            <p
              className="max-w-xl mx-auto text-gray-500"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {HOME_TESTIMONIALS[titles.desc]}
            </p>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}

        modules={[Autoplay, Pagination, Navigation]}
        className=" "
      >
        <SwiperSlide>
          <div className="flex">
            <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4">
              <div className="flex flex-col md:flex-row gap-x-4">
                <div className="flex flex-col items-center justify-center w-2/5 mb-5 gap-x-4">
                  <div className="relative w-24 h-24 mb-4 rounded-full">
                    <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-quote"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                    </span>
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src={Driver1}
                      alt="driver"
                    />
                  </div>
                  <div className="text-center info">
                    <h2 className="text-lg font-bold text-black ">
                      David Jones
                    </h2>
                    <span className="block text-xs font-semibold text-blue-600 uppercase">
                      Truck driver
                    </span>
                  </div>
                </div>
                <div className="relative flex-1 mb-8 bg-white rounded shadow ">
                  <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-1/2 -left-4">
                    <div className="h-10 origin-top-right transform -rotate-45 bg-white  "></div>
                  </div>
                  <div className="relative z-20 p-8">
                    <p className="text-base leading-7 text-secondary">
                      I love what I do, and I know so many other drivers feel
                      the same way. We take pride in how essential our skills
                      and work are. Yet, life on the road isn’t easy, despite
                      how fun it may sound for outsiders or beginners. It can be
                      a lonely life, risky, and quite grueling. A person needs a
                      lot of stamina to stay awake after driving for several
                      hours at a time, and this can be very exhausting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4">
              <div className="flex flex-col md:flex-row  gap-x-4">
                <div className="flex flex-col items-center justify-center w-2/5 mb-5 gap-x-4">
                  <div className="relative w-24 h-24 mb-4 rounded-full">
                    <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-quote"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                    </span>
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src={Driver2}
                      alt="driver"
                    />
                  </div>
                  <div className="text-center info">
                    <h2 className="text-lg font-bold text-black ">
                      Michael Brown
                    </h2>
                    <span className="block text-xs font-semibold text-blue-600 uppercase">
                      Truck driver
                    </span>
                  </div>
                </div>
                <div className="relative flex-1 mb-8 bg-white rounded shadow ">
                  <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-1/2 -left-4">
                    <div className="h-10 origin-top-right transform -rotate-45 bg-white  "></div>
                  </div>
                  <div className="relative z-20 p-8">
                    <p className="text-base leading-7 text-secondary">
                      I’ve been working with Artel Logistics for a long time. To
                      put it another way, when I first became a client, my
                      direct contact was the company’s founder, and I was an
                      employee of F.W. Woolworth Company. Much has changed since
                      then, but one thing remains constant—Artel Logistics’
                      superior service.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4">
              <div className="flex flex-col md:flex-row gap-x-4">
                <div className="flex flex-col items-center justify-center w-2/5 mb-5 gap-x-4">
                  <div className="relative w-24 h-24 mb-4 rounded-full">
                    <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-quote"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                    </span>
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src={Driver3}
                      alt="driver"
                    />
                  </div>
                  <div className="text-center info">
                    <h2 className="text-lg font-bold text-black ">
                      John Williams
                    </h2>
                    <span className="block text-xs font-semibold text-blue-600 uppercase">
                      Truck driver
                    </span>
                  </div>
                </div>
                <div className="relative flex-1 mb-8 bg-white rounded shadow ">
                  <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-1/2 -left-4">
                    <div className="h-10 origin-top-right transform -rotate-45 bg-white"></div>
                  </div>
                  <div className="relative z-20 p-8">
                    <p className="text-base leading-7 text-secondary">
                      I think everyone here is professional and the very best at
                      what they do; I awe and continue to be amazed more and
                      more at our capabilities and solutions-driven mindset.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
