import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { GENERAL_WORDS, HOME_BLOG, IMAGE_URL } from "../../../constants";

const News = () => {
  const [news, setNews] = useState(null);
  const language = useSelector((state) => state.language.lang);
  const [titles, setTitles] = useState({
    title: `title_${language}`,
    title2: `title2_${language}`,
    btn: `see_btn_${language}`,
  });

  useEffect(() => {
    setTitles({
      title: `title_${language}`,
      title2: `title2_${language}`,
      btn: `see_btn_${language}`,
    });
  }, [language]);

  async function getData() {
    await axios
      .get("/news")
      .then((res) => setNews(res?.data))
      .catch(() => {
        return;
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="text-center uppercase">
        <h3
          className="text-neutral-500 text-xl font-bold mb-3"
          data-aos="fade-up"
        >
          {HOME_BLOG[titles.title]}
        </h3>
        <h1
          className="text-2xl font-semibold leading-40 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {HOME_BLOG[titles.title2]}
        </h1>
        <div className="flex items-center justify-center gap-10">
          <div data-aos="fade-up">
            <hr className="border-2 border-black w-[100px]" />
          </div>
          <div data-aos="fade-up">
            <img src="./logo.png" alt="logo" width={100} />
          </div>
          <div data-aos="fade-up">
            <hr className="border-2 border-black w-[100px]" />
          </div>
        </div>
      </div>
      <div className="p-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {news?.slice(0, 6)?.map?.((item, ind) => {
            return (
              <Link
                to={`/blog`}
                key={ind}
                data-aos="fade-right"
                data-aos-delay={`${ind}00`}
                className="mb-0 overflow-hidden bg-white rounded shadow-lg border"
              >
                <div className="relative overflow-hidden h-96">
                  <img
                    className="object-cover w-full h-full transition-all hover:scale-105"
                    src={IMAGE_URL + item?.jpgId}
                    alt="news image"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6 -mt-12 bg-gradient-to-t from-gray-800/70 to-gray-50/0">
                    <span className="block w-fit mb-2 text-xs font-semibold bg-red-500 text-white px-3 rounded">
                      News
                    </span>
                    <span className="block w-fit mb-2 font-semibold bg-white/70 px-3 rounded">
                      {item?.createdDate?.slice(0, 10)}
                    </span>
                    <h2 className="text-xl font-bold leading-9 text-white">
                      {item[titles.title]}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="w-full flex mt-8">
          <Link
            to={"/blog"}
            className="w-11/12 md:w-1/2 mx-auto p-2 border border-primary rounded-lg text-center transition-all hover:shadow-lg hover:border-secondary"
          >
            <p>
              {GENERAL_WORDS[titles.btn]}
              <span className="fa-solid fa-arrow-right ml-3" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
