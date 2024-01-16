import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HOME_VACANCY, GENERAL_WORDS } from "../../../constants";
import Empty from "../../../components/Empty";

const Vacancy = () => {
  const language = useSelector((state) => state.language.lang);
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState({
    title: `title_${language}`,
    desc: `description_${language}`,
    btn: `see_btn_${language}`,
  });

  useEffect(() => {
    setTitles({
      title: `title_${language}`,
      desc: `description_${language}`,
      btn: `see_btn_${language}`,
    });
  }, [language]);

  async function getData() {
    await axios
      .get("/vacancy")
      .then((res) => setData(res?.data))
      .catch(() => {
        return;
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1
        className="text-2xl md:text-4xl text-center text-secondary font-semibold uppercase"
        data-aos="fade-up"
      >
        {HOME_VACANCY[titles.title]}
      </h1>
      {data?.length === 0 && (
        <div>
          <Empty />
        </div>
      )}
      <div className="job-list col-span-full px-4 py-20 flex flex-wrap gap-x-[1%] gap-y-4">
        {data?.slice(0, 4)?.map?.((i, ind) => {
          return (
            <li
              key={ind}
              data-aos="fade-right"
              data-aos-delay={`${ind}00`}
              className="job__card list-none w-full md:w-[49.5%]"
            >
              <div className="job__content flex bg-gray-50 rounded-md">
                <div className="relative w-full px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between w-full">
                    <p className="truncate text-base font-medium text-teal-500 lg:mt-1 lg:text-lg ">
                      {i?.[titles.title]}
                    </p>
                    <div className="ml-2 flex flex-shrink-0 lg:ml-0 lg:translate-x-[5px]">
                      <p
                        className={`inline-flex rounded-full ${
                          i?.remote ? "bg-sky-200" : "bg-green-200"
                        } px-2 text-xs font-semibold leading-5 text-green-800`}
                      >
                        {i?.remote ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm mt-3">{i?.[titles.desc]}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <span className="fa-solid fa-location-dot mr-1" />
                        {i?.location}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <span className="fa-solid fa-calendar mr-1" />
                          <p className="flex">
                            <time>{i?.workdays}</time>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <span className="fa-solid fa-clock mr-1" />
                          <p className="flex">
                            <time>{i?.workHours}</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
        {data?.length !== 0 && (
          <Link
            to={"/employee"}
            className="w-11/12 md:w-1/2 mx-auto p-2 border border-primary rounded-lg text-center transition-all hover:shadow-lg hover:border-secondary"
          >
            <p>
              {GENERAL_WORDS[titles.btn]}
              <span className="fa-solid fa-arrow-right ml-3" />
            </p>
          </Link>
        )}
      </div>
    </>
  );
};

export default Vacancy;
