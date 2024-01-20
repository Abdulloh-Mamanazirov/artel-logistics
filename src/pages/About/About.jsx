import axios from "axios";
import { useEffect, useState } from "react";
import { HOME_ABOUT, ABOUT_PAGE, IMAGE_URL } from "../../constants";
import { useSelector } from "react-redux";
import { Image1, Image2, Image3, Image4 } from "../../assets";

const About = () => {
  const language = useSelector((state) => state.language.lang);
  const [data, setData] = useState(null);
  const [titles, setTitles] = useState({
    title2: `title2_${language}`,
    about: `about_${language}`,
    story_title: `story_title_${language}`,
    story: `story_${language}`,
  });

  useEffect(() => {
    setTitles({
      title2: `title2_${language}`,
      about: `about_${language}`,
      story_title: `story_title_${language}`,
      story: `story_${language}`,
    });
  }, [language]);

  async function getData() {
    await axios
      .get("/information")
      .then((res) => setData(res?.data?.[0]))
      .catch(() => {
        return;
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1
              className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4"
              data-aos="fade-up"
            >
              {HOME_ABOUT[titles.title2]}
            </h1>
            <p
              className="font-normal text-base leading-6 text-gray-600 "
              data-aos="fade-up"
              da-aos-dalay="500"
            >
              {data?.[titles.about]}
            </p>
          </div>
          <div
            className="w-full lg:w-8/12 border lg:max-h-96"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              className="w-full h-full object-cover"
              src={IMAGE_URL + data?.image}
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div
            className="w-full lg:w-5/12 flex flex-col justify-center"
            data-aos="fade-right"
          >
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
              {ABOUT_PAGE[titles.story_title]}
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              {ABOUT_PAGE[titles.story]}
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden aspect-square w-full h-full object-cover rounded-md"
                  src={Image1}
                  alt="Image"
                  data-aos="fade-right"
                  data-aos-offset="120"
                  data-aos-delay="100"
                />
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden aspect-square w-full h-full object-cover rounded-md"
                  src={Image2}
                  alt="Image"
                  data-aos="fade-right"
                  data-aos-offset="120"
                  data-aos-delay="300"
                />
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden aspect-square w-full h-full object-cover rounded-md"
                  src={Image3}
                  alt="Image"
                  data-aos="fade-right"
                  data-aos-offset="120"
                  data-aos-delay="500"
                />
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden aspect-square w-full h-full object-cover rounded-md"
                  src={Image4}
                  alt="Image"
                  data-aos="fade-right"
                  data-aos-offset="120"
                  data-aos-delay="700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
