import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../../constants";

const Footer = () => {
  return (
    <div className="mt-10">
      <hr className="my-6 max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <footer className="bg-white ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="./logo.png"
                  className="h-16 me-3"
                  alt="FlowBite Logo"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Pages
                </h2>
                <ul className="font-medium">
                  {PAGES.map((page, ind) => (
                    <li className="mb-4">
                      <Link to={page?.path} className="hover:underline">
                        {page?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Follow us
                </h2>
                <ul className=" font-medium">
                  <li className="mb-4">
                    <Link to="" className="hover:underline ">
                      Telegram
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="" className="hover:underline ">
                      Instagram
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="" className="hover:underline ">
                      Facebook
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="" className="hover:underline ">
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className=" font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
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
                Artel Logistics™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex gap-5 mt-4 sm:justify-center sm:mt-0">
              <Link className="text-gray-500 hover:text-gray-900">
                <span className="fa-brands fa-facebook-f" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-900">
                <span className="fa-brands fa-instagram" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-900">
                <span className="fa-solid fa-paper-plane" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-900">
                <span className="fa-brands fa-x-twitter" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
