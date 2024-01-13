import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CALCULATOR, VACANCY_PAGE } from "../../constants";

const Calculator = () => {
  const language = useSelector((state) => state.language.lang);
  const [miles, setMiles] = useState(2500);
  const [position, setPosition] = useState(0.59);
  const [safeDrive, setSafeDrive] = useState(0);
  const [more6Months, setMore6Months] = useState(0);
  const [titles, setTitles] = useState({
    title2: `title2_${language}`,
    desc: `desc_${language}`,
    lang: language,
  });

  useEffect(() => {
    setTitles({
      title2: `title2_${language}`,
      desc: `desc_${language}`,
      lang: language,
    });
  }, [language]);

  return (
    <div className="container mx-auto md:w-10/12">
      <div className="my-5 text-center">
        <h1
          className="text-2xl md:text-4xl text-secondary font-semibold uppercase"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {VACANCY_PAGE[titles.title2]}
        </h1>
        <p className="text-text" data-aos="fade-up" data-aos-delay="230">
          {VACANCY_PAGE[titles.desc]}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-20">
        <div
          className="rounded-md  bg-[#EFF4F4] p-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <h1 className="text-2xl font-semibold">
              {CALCULATOR.calculatorTitle[titles.lang]}
            </h1>
          </div>
          <div className="mt-3">
            <label
              for="countries"
              className="block mb-2 font-medium text-gray-900"
            >
              {CALCULATOR.positionTitle[titles.lang]}
            </label>
            <select
              onChange={(e) => setPosition(Number(e.target.value))}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block outline-none border-none w-full p-3 "
            >
              <option value="0.59">Solo W-2</option>
              <option value="0.63">Solo 1099</option>
              <option value="0.68">Team W-2</option>
              <option value="0.79">Team 1099</option>
            </select>
          </div>
          <div className="mt-5">
            <p>{CALCULATOR.bonusTitle[titles.lang]}</p>
            <div className="mt-1">
              <input
                id="safety"
                type="checkbox"
                onChange={(e) =>
                  setSafeDrive(e.target.checked === true ? 0.03 : 0)
                }
                className="accent-green-500 scale-150 "
              />
              <label htmlFor="safety" className="text-sm ml-2">
                {CALCULATOR.safeDriveDescription[titles.lang]}
              </label>
            </div>
            <div className="mt-5">
              <input
                id="with"
                type="checkbox"
                onChange={(e) =>
                  setMore6Months(e.target.checked === true ? 0.01 : 0)
                }
                className="accent-green-500 scale-150 "
              />
              <label htmlFor="with" className="text-sm ml-2">
                {CALCULATOR.employmentDescription[titles.lang]}
              </label>
            </div>
            <br />
          </div>
          <div>
            <label htmlFor="" className="text-sm">
              {CALCULATOR.weeklyMilesDescription[titles.lang]}
            </label>{" "}
            <br /> <br />
            <input
              className="w-full p-3 outline-green-600 border-none"
              type="number"
              defaultValue={2500}
              onChange={(e) => setMiles(e.target.value)}
            />
          </div>
        </div>
        <div
          className="bg-[#EFF4F4] p-10 rounded-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <div>
              <h1 className="text-3xl font-semibold">
                {CALCULATOR.summaryTitle[titles.lang]}
              </h1>
            </div>
            <div className="flex items-center justify-between mt-5">
              <p className="text-sm">{CALCULATOR.positionTitle[titles.lang]}</p>
              <p>{position}</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <p className="text-sm">{CALCULATOR.bonusTitle[titles.lang]}</p>
              <p>{+safeDrive + +more6Months}</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <p className="text-sm">
                {CALCULATOR.weeklyMilesDescription[titles.lang]}
              </p>
              <p>{miles}</p>
            </div>
            <hr className="my-5" />
            <div className="flex items-center justify-between mt-5">
              <p className="text-xl font-semibold">
                {CALCULATOR.weeklySalaryTitle[titles.lang]}
              </p>
              <p className="text-xl font-semibold">
                {(
                  miles *
                  (+safeDrive + +more6Months + +position)
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            <hr className="my-5" />
            <div className="flex items-center justify-between mt-5">
              <p className="text-xl font-semibold">
                {CALCULATOR.totalCentTitle[titles.lang]}
              </p>
              <p className="text-xl font-semibold">
                {(+safeDrive + +more6Months + +position).toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
