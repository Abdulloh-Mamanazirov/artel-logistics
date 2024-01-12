import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../../constants";

const FullBlog = ({ data }) => {
  const language = useSelector((state) => state.language.lang);

  const [titles, setTitles] = useState({
    title: `title_${language}`,
    description: `description_${language}`,
  });

  useEffect(() => {
    setTitles({
      title: `title_${language}`,
      description: `description_${language}`,
    });
  }, [language]);

  return (
    <section class="flex items-center font-poppins h-[calc(100vh-150px)]">
      <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap ">
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src={IMAGE_URL + data?.jpgId}
              alt=""
              class="relative z-40 object-cover w-full h-96 rounded-3xl border shadow-md"
            />
          </div>
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <h2 class="mb-4 text-4xl font-semibold text-blue-500">
              {data?.[titles.title]}
            </h2>
            <p class="mb-10 text-base leading-7 text-gray-500 max-w-full break-words break-all">
              {data?.[titles.description]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullBlog;
