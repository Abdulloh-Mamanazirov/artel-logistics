import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CONTACT_PAGE, MESSAGES } from "../../constants";
import Calculator from "./Calculator";
import Vacancy from "./Vacancy";

const Employee = () => {
  const language = useSelector((state) => state.language.lang);
  const [titles, setTitles] = useState({
    apply: `apply_${language}`,
    first_name: `first_name_${language}`,
    last_name: `last_name_${language}`,
    email: `email_${language}`,
    phone: `phone_${language}`,
    city: `city_${language}`,
    experience: `experience_${language}`,
    message: `message_${language}`,
    btn: `apply_btn_${language}`,
    msg_success: `sent_${language}`,
    msg_error: `error_${language}`,
  });

  useEffect(() => {
    setTitles({
      apply: `apply_${language}`,
      first_name: `first_name_${language}`,
      last_name: `last_name_${language}`,
      email: `email_${language}`,
      phone: `phone_${language}`,
      city: `city_${language}`,
      experience: `experience_${language}`,
      message: `message_${language}`,
      btn: `apply_btn_${language}`,
      msg_success: `sent_${language}`,
      msg_error: `error_${language}`,
    });
  }, [language]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { first_name, last_name, city, email, phone, experience, comment } =
      e.target;
    const data = {
      name: first_name.value + " " + last_name.value,
      city: city.value,
      email: email.value,
      phone: phone.value,
      experience: experience.value,
      comment: comment.value,
    };

    await axios
      .post("/hiring", data)
      .then((res) => {
        if (res?.status >= 200 && res?.status < 300) {
          alert(MESSAGES.contact[titles.msg_success]);
        }
      })
      .catch(() => {
        alert(MESSAGES.contact[titles.msg_error]);
      });
  }

  return (
    <div className="container mx-auto mt-10">
      <section>
        <Vacancy />
      </section>
      <section>
        <Calculator />
      </section>
      <form
        onSubmit={handleSubmit}
        className="w-11/12 md:w-1/2 mx-auto mt-16"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="150"
      >
        <h1 className="text-2xl md:text-4xl text-center text-secondary font-semibold uppercase">
          {CONTACT_PAGE[titles.apply]}
        </h1>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {CONTACT_PAGE.inputs[titles.first_name]}
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {CONTACT_PAGE.inputs[titles.last_name]}
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="city"
            id="city"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="city"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {CONTACT_PAGE.inputs[titles.city]}
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="^\+[\d\s]+$"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {CONTACT_PAGE.inputs[titles.phone]}
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {CONTACT_PAGE.inputs[titles.email]}
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="experience"
              id="experience"
              min={0}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="experience"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {CONTACT_PAGE.inputs[titles.experience]}
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="comment"
              id="comment"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="comment"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {CONTACT_PAGE.inputs[titles.message]}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {CONTACT_PAGE.inputs[titles.btn]}
        </button>
      </form>
    </div>
  );
};

export default Employee;
