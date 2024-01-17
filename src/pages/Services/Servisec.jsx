import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IMAGE_URL, SERVICES_PAGE } from "../../constants";
import Empty from "../../components/Empty";

const Servisec = () => {
  const language = useSelector((state) => state.language.lang);
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState({
    title: `title_${language}`,
    desc: `description_${language}`,
  });

  useEffect(() => {
    setTitles({
      title: `title_${language}`,
      desc: `description_${language}`,
    });
  }, [language]);

  async function getData() {
    await axios
      .get("/services")
      .then((res) => setData(res?.data))
      .catch(() => {
        return;
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container md:w-10/12 mx-auto">
      <div className="text-center">
        <h1
          className="text-3xl text-[#333366] my-10 font-medium"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          {SERVICES_PAGE.title[language]}
        </h1>
      </div>
      {data?.length === 0 && (
        <div>
          <Empty />
        </div>
      )}
      {data?.map?.((item, i) => {
        return (
          <div
            key={i}
            className="service-flex-reverse my-10 flex items-start justify-center relative"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <div className="service-wrapper-div w-full md:w-1/2 relative -right-12 md:top-16">
              <div className="bg-[#337AB7] py-10 px-3 text-center -skew-x-12 ">
                <h1 className="text-2xl md:text-4xl font-semibold text-white skew-x-12">
                  {item?.[titles.title]}
                </h1>
              </div>
              <div className="md:mx-20 mt-4">
                <p className="text-sm md:text-base text-[#333366] font-semibold w-fit">
                  {item?.[titles.desc]}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={IMAGE_URL + item?.imageId}
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
