import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IMAGE_URL } from "../../constants";
import { Image4 } from "../../assets";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel() {
  const [data, setData] = useState([]);

  async function getData() {
    await axios
      .get("/banner")
      .then((res) => setData(res?.data))
      .catch(() => {
        return;
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="h-[calc(100vh-122px)] relative -top-[115px] mb-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.length === 0 && (
          <SwiperSlide className="h-screen">
            <img
              src={Image4}
              alt="artel logistics carousel image"
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        )}
        {data?.map((item, ind) => (
          <SwiperSlide key={ind} className="h-screen">
            <img
              src={IMAGE_URL + item?.image}
              alt="artel logistics carousel image"
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
