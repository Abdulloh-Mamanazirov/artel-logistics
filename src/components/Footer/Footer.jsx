import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PAGES, FOOTER_WORDS } from "../../constants";

const Footer = () => {
  const language = useSelector((state) => state.language.lang);
  const [footerLinks, setFooterLinks] = useState(`title_${language}`);

  useEffect(() => {
    setFooterLinks(`title_${language}`);
  }, [language]);

  return (
    <div className="mt-10">
      <hr className="my-6 max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <footer className="bg-white ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="../logo.png"
                  className="h-16 me-3"
                  alt="FlowBite Logo"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:gap-32">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  {FOOTER_WORDS.pages[footerLinks]}
                </h2>
                <ul className="font-medium">
                  {PAGES.map((page, ind) => (
                    <li key={ind} className="mb-4">
                      <Link to={page?.path} className="hover:underline">
                        {page[footerLinks]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  {FOOTER_WORDS.follow[footerLinks]}
                </h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <Link to="" className="hover:underline ">
                      Telegram
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="https://www.facebook.com/profile.php?id=100077261454976"
                      target={"_blank"}
                      className="hover:underline "
                    >
                      Facebook
                    </Link>
                  </li>
                  <li className="mb-4">
                    <a
                      href="mailto:hr@artellogistics.com"
                      className="hover:underline "
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 ">
              © {new Date().getFullYear()}{" "}
              <Link to="/" className="hover:underline">
                Artel Logistics™.
              </Link>{" "}
              {FOOTER_WORDS.rights[footerLinks]}.
            </span>
            <div className="flex gap-5 mt-4 sm:justify-center sm:mt-0">
              <Link
                to="https://www.facebook.com/profile.php?id=100077261454976"
                target={"_blank"}
                title="Facebook"
                className="text-gray-500 hover:text-gray-900"
                aria-label="facebook"
              >
                <span className="fa-brands fa-facebook-f" />
              </Link>
              <Link
                title="Telegram"
                className="text-gray-500 hover:text-gray-900"
                aria-label="telegram"
              >
                <span className="fa-solid fa-paper-plane" />
              </Link>
              <a
                href="mailto:hr@artellogistics.com"
                title="Gmail"
                className="text-gray-500 hover:text-gray-900"
                aria-label="mail-to-us"
              >
                <span className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
