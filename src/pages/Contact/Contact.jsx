import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CONTACT_PAGE, MESSAGES } from "../../constants";

const Contact = () => {
  const language = useSelector((state) => state.language.lang);
  const [data, setData] = useState(null);
  const [titles, setTitles] = useState({
    title: `title_${language}`,
    title2: `title2_${language}`,
    card_desc: `desc_${language}`,
    first_name: `first_name_${language}`,
    last_name: `last_name_${language}`,
    email: `email_${language}`,
    phone: `phone_${language}`,
    message: `message_${language}`,
    btn: `send_${language}`,
    msg_success: `sent_${language}`,
    msg_error: `error_${language}`,
  });

  useEffect(() => {
    setTitles({
      title: `title_${language}`,
      title2: `title2_${language}`,
      card_desc: `desc_${language}`,
      first_name: `first_name_${language}`,
      last_name: `last_name_${language}`,
      email: `email_${language}`,
      phone: `phone_${language}`,
      message: `message_${language}`,
      btn: `send_${language}`,
      msg_success: `sent_${language}`,
      msg_error: `error_${language}`,
    });
  }, [language]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { firstName, secondName, email, phone, message } = e.target;
    const data = {
      firstName: firstName.value,
      secondName: secondName.value,
      email: email.value,
      number: phone.value,
      message: message.value,
    };

    await axios
      .post("/contact", data)
      .then((res) => {
        if (res?.status >= 200 && res?.status < 300) {
          alert(MESSAGES.contact[titles.msg_success]);
        }
      })
      .catch(() => {
        alert(MESSAGES.contact[titles.msg_error]);
      });
  }

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
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-11 md:px-6">
        <div className="mb-20 text-center pb-7">
          <h2
            className="pb-2 mb-2 text-xl font-bold text-gray md:text-4xl "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {CONTACT_PAGE[titles.title]}
          </h2>
          <p
            className="text-sm text-gray-600 "
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {CONTACT_PAGE[titles.title2]}
          </p>
        </div>
        <div className="w-full grid md:col-span-4 lg:grid-cols-3 mb-6">
          <div
            className="md:col-span-2 lg:col-span-1 w-full px-4 mb-20 lg:mb-0"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="relative h-full px-6 pt-20 pb-12 text-center shadow bg-gray-50 ">
              <div className="absolute top-0 inline-flex items-center justify-center w-20 h-20 text-red-600 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full  -700  left-1/2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-envelope-paper"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                </svg>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl ">
                {CONTACT_PAGE.cards.card1[titles.title]}
              </h2>
              <h3 className="mb-6 text-lg font-medium ">
                {CONTACT_PAGE.cards.card1[titles.card_desc]}
              </h3>
              <p className="text-xl text-gray-500 sm:text-2xl ">
                {data?.email}
              </p>
            </div>
          </div>
          <div
            className="md:col-span-2 lg:col-span-1 w-full px-4 mb-20 lg:mb-0"
            data-aos="fade-right"
            data-aos-delay="170"
          >
            <div className="relative h-full px-6 pt-20 pb-12 text-center shadow bg-gray-50 ">
              <div className="absolute top-0 inline-flex items-center justify-center w-20 h-20 text-red-600 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full  -700  left-1/2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl ">
                {CONTACT_PAGE.cards.card2[titles.title]}
              </h2>
              <h3 className="mb-6 text-lg font-medium ">
                {CONTACT_PAGE.cards.card2[titles.card_desc]}
              </h3>
              <p className="text-xl text-gray-500 sm:text-2xl ">
                {data?.number}
              </p>
            </div>
          </div>
          <div
            className="md:col-span-4 lg:col-span-1 w-full px-4 mb-10 lg:mb-0"
            data-aos="fade-right"
            data-aos-delay="230"
          >
            <div className="relative h-full px-6 pt-20 pb-12 text-center shadow bg-gray-50 ">
              <div className="absolute top-0 inline-flex items-center justify-center w-20 h-20 text-red-600 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-600 rounded-full  -700  left-1/2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl ">
                {CONTACT_PAGE.cards.card3[titles.title]}
              </h2>
              <h3 className="mb-6 text-lg font-medium ">
                {CONTACT_PAGE.cards.card3[titles.card_desc]}
              </h3>
              <p className="text-xl text-gray-500 sm:text-2xl ">
                {data?.location}
              </p>
            </div>
          </div>
        </div>
        <div
          className="px-3 py-6 "
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="200"
        >
          <form
            onSubmit={handleSubmit}
            className="py-6 rounded shadow  bg-gray-50"
          >
            <div className="flex flex-wrap ">
              <div className="w-full px-3 md:w-1/2 md:mb-4">
                <label
                  for="firstname"
                  className="block mb-3 font-bold text-gray-700 uppercase "
                >
                  {CONTACT_PAGE.inputs[titles.first_name]}
                </label>
                <input
                  type="text"
                  required
                  name="firstName"
                  id="firstName"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0    "
                />
              </div>
              <div className="w-full px-3 md:w-1/2 md:mb-4">
                <label
                  for="secondName"
                  className="block mb-3 font-bold text-gray-700 uppercase "
                >
                  {CONTACT_PAGE.inputs[titles.last_name]}
                </label>
                <input
                  id="secondName"
                  type="text"
                  required
                  name="secondName"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded -gray-500 lg:mb-0    "
                />
              </div>
              <div className="w-full px-3 md:w-1/2 md:mb-0">
                <label
                  for="email"
                  className="block mb-3 font-bold text-gray-700 uppercase "
                >
                  {CONTACT_PAGE.inputs[titles.email]}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  name="email"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded -gray-500    "
                />
              </div>
              <div className="w-full px-3 md:w-1/2 md:mb-0">
                <label
                  for="phone"
                  className="block mb-3 font-bold text-gray-700 uppercase "
                >
                  {CONTACT_PAGE.inputs[titles.phone]}
                </label>
                <input
                  type="tel"
                  required
                  name="phone"
                  id="phone"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded -gray-500    "
                />
              </div>
            </div>
            <div className="px-3 mb-6">
              <label
                for="message"
                className="block mb-3 font-bold text-gray-700 uppercase "
              >
                {CONTACT_PAGE.inputs[titles.message]}
              </label>
              <textarea
                rows={4}
                id="message"
                required
                name="message"
                className="block w-full p-4 leading-tight text-gray-700 bg-gray-100 rounded -gray-500    "
              ></textarea>
            </div>
            <div className="px-6">
              <button
                type="submit"
                className="px-4 py-2 font-medium text-gray-100 bg-red-600 rounded shadow hover:bg-red-700 d-700"
              >
                {CONTACT_PAGE.inputs[titles.btn]}
              </button>
            </div>
          </form>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3039.9342016471896!2d-79.8597206!3d40.3659833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ef00228a499d%3A0x22c09300fc3b9902!2sArtel%20logistics%20inc!5e0!3m2!1sen!2s!4v1705478283362!5m2!1sen!2s"
            aria-label="location-of-artel-logistics"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
