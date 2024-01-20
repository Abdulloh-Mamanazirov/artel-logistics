import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { PAGES } from "../../../constants";
import "./index.css";

const index = () => {
  const sidebar = useRef();
  const { pathname } = useLocation();
  const language = useSelector((state) => state.language.lang);
  const [navTitle, setNavTitle] = useState(`title_${language}`);

  useEffect(() => {
    setNavTitle(`title_${language}`);
  }, [language]);

  useEffect(() => {
    handleCloseSidebar();
  }, [pathname]);

  function handleOpenSidebar() {
    sidebar.current.classList.remove("translate-x-full");
    sidebar.current.classList.remove("hidden");
    sidebar.current.classList.add("translate-x-0");
  }

  function handleCloseSidebar() {
    sidebar.current.classList.remove("translate-x-0");
    sidebar.current.classList.add("translate-x-full");
    sidebar.current.classList.add("hidden");
  }

  return (
    <aside className="inline-block md:hidden">
      {/* sidebar open button */}
      <button
        onClick={handleOpenSidebar}
        aria-label="open-sidebar"
        className="inline-block md:hidden"
      >
        <span className="fa-solid fa-bars fa-xl sm:fa-2xl" />
      </button>

      {/* sidebar */}
      <div
        ref={sidebar}
        className="sidebar z-[60] fixed top-0 right-0 h-fit w-full sm:w-96 bg-white backdrop-blur-xl transition-all translate-x-full"
      >
        <div className="flex items-center justify-between w-full p-6">
          <button
            onClick={handleCloseSidebar}
            className="inline-block md:hidden"
            aria-label="close-sidebar"
          >
            <span className="fa-solid fa-x fa-lg sm:fa-2xl" />
          </button>
        </div>
        <ul className="flex flex-col p-5 gap-3">
          {PAGES.map((page, ind) => (
            <li key={ind}>
              <Link
                to={page.path}
                className={`w-full bg-gray-300 py-2 px-5 text-lg border-r-8 border-primary block -skew-x-[15deg] hover:bg-gray-200 hover:text-black ${
                  pathname === page.path && "bg-secondary text-white"
                }`}
                aria-label={`${page.title_en} page`}
              >
                <span
                  hidden={pathname !== page.path}
                  className="fa-solid fa-star text-xs absolute right-2 top-1 skew-x-[15deg]"
                />
                <div className="w-full skew-x-[15deg]">{page[navTitle]}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default index;
