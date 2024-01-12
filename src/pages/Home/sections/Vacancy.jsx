import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HOME_VACANCY, GENERAL_WORDS } from "../../../constants";

const Vacancy = () => {
  const language = useSelector((state) => state.language.lang);
  const [titles, setTitles] = useState({
    title: `title_${language}`,
    btn: `see_btn_${language}`,
  });

  useEffect(() => {
    setTitles({
      title: `title_${language}`,
      btn: `see_btn_${language}`,
    });
  }, [language]);

  const jobs = [
    {
      title: "Operator",
      position: "Full Time",
      location: "Bristol",
      type: "Remote",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis nam, commodi sapiente sit laudantium distinctio? Fugiat quasi commodi debitis.",
    },
    {
      title: "Head of Legal",
      position: "Part Time",
      location: "London",
      type: "In House",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis nam, commodi sapiente sit laudantium distinctio? Fugiat quasi commodi debitis.",
    },
    {
      title: "Junior Legal Counsel",
      position: "Part Time",
      location: "London",
      type: "In House",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis nam, commodi sapiente sit laudantium distinctio? Fugiat quasi commodi debitis.",
    },
    {
      title: "Truck driver",
      position: "Part Time",
      location: "London",
      type: "In House",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis nam, commodi sapiente sit laudantium distinctio? Fugiat quasi commodi debitis.",
    },
  ];

  return (
    <>
      <h1
        className="text-2xl md:text-4xl text-center text-secondary font-semibold uppercase"
        data-aos="fade-up"
      >
        {HOME_VACANCY[titles.title]}
      </h1>
      <div className="job-list col-span-full px-4 py-20 flex flex-wrap gap-x-[1%] gap-y-4">
        {jobs.map((i, ind) => {
          return (
            <li
              key={ind}
              data-aos="fade-right"
              data-aos-delay={`${ind}00`}
              className="job__card list-none w-full md:w-[49.5%]"
            >
              <a href="#" className="job__content flex bg-gray-50 rounded-md">
                <div className="relative w-full px-4 py-4 sm:px-6">
                  <div
                    className="
              flex items-center justify-between w-full 
            "
                  >
                    <p className="truncate text-sm font-medium text-teal-500 lg:mt-1 lg:text-lg ">
                      {i.title}
                    </p>
                    <div className="ml-2 flex flex-shrink-0 lg:ml-0 lg:translate-x-[5px]">
                      <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {i.position}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <span className="fa-solid fa-location-dot mr-1" />
                        {i.location}
                      </p>

                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        {i.type === "Remote" ? (
                          <span className="fa-solid fa-globe mr-1" />
                        ) : (
                          <span className="fa-solid fa-building mr-1" />
                        )}
                        {i.type}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className="fa-solid fa-calendar mr-1" />
                        <p className="flex">
                          <div className="hidden sm:flex">Closing on&nbsp;</div>
                          <time
                            datetime="2020-01-07"
                            className="hidden md:flex"
                          >
                            January 7, 2020
                          </time>
                          <time
                            datetime="2020-01-07"
                            className="flex md:hidden"
                          >
                            01/07/20
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
        <Link
          to={"/employee"}
          className="w-11/12 md:w-1/2 mx-auto p-2 border border-primary rounded-lg text-center transition-all hover:shadow-lg hover:border-secondary"
        >
          <p>
            {GENERAL_WORDS[titles.btn]}
            <span className="fa-solid fa-arrow-right ml-3" />
          </p>
        </Link>
      </div>
    </>
  );
};

export default Vacancy;
