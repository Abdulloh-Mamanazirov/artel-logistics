import axios from "axios";
import { useEffect, useState } from "react";
import { BLOG_PAGE, GENERAL_WORDS, IMAGE_URL } from "../../constants";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Empty from "../../components/Empty";
import FullBlog from "./FullBlog";

const Blogs = () => {
  const { id } = useParams();
  const language = useSelector((state) => state.language.lang);
  const [data, setData] = useState([]);
  const [currentNews, setCurrentNews] = useState(null);
  const [titles, setTitles] = useState({
    title: `title_${language}`,
    desc: `desc_${language}`,
    description: `description_${language}`,
    read_btn: `read_btn_${language}`,
  });

  useEffect(() => {
    setTitles({
      title: `title_${language}`,
      desc: `desc_${language}`,
      description: `description_${language}`,
      read_btn: `read_btn_${language}`,
    });
  }, [language]);

  async function getData() {
    await axios
      .get("/news")
      .then((res) => setData(res?.data))
      .catch(() => {
        return;
      });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (id) {
      setCurrentNews(data?.find((item) => Number(item?.id) === Number(id)));
    }
  }, [id]);

  return (
    <div>
      {currentNews && <FullBlog data={currentNews} />}
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 ">
              {BLOG_PAGE[titles.title]}
            </h1>
            <p className="text-base leading-normal text-center text-gray-600  mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              {BLOG_PAGE[titles.desc]}
            </p>
          </div>
          {data?.length === 0 && (
            <div>
              <Empty />
            </div>
          )}
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                {data?.[0] && (
                  <Link
                    to={`/blog/${data?.[0]?.id}`}
                    className="sm:w-1/2 relative"
                  >
                    <div>
                      <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        {data?.[0]?.createdDate?.slice(0, 10)}
                      </p>
                      <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-b from-transparent to-black w-full">
                        <h2 className="text-xl font-semibold 5 text-white max-w-full line-clamp-1">
                          {data?.[0]?.[titles.title]}
                        </h2>
                        <p className="text-base leading-4 text-white mt-2 max-w-full line-clamp-2">
                          {data?.[0]?.[titles.description]}
                        </p>
                        <Link
                          to={`/blog/${data?.[0]?.id}`}
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            {GENERAL_WORDS?.[titles.read_btn]}
                          </p>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg"
                            alt="arrow"
                          />
                        </Link>
                      </div>
                    </div>
                    <img
                      src={IMAGE_URL + data?.[0]?.jpgId}
                      className="w-full aspect-square object-cover"
                      alt="news image"
                    />
                  </Link>
                )}
                {data?.[1] && (
                  <Link
                    to={`/blog/${data?.[1]?.id}`}
                    className="sm:w-1/2 sm:mt-0 mt-4 relative"
                  >
                    <div>
                      <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        {data?.[1]?.createdDate?.slice(0, 10)}
                      </p>
                      <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-b from-transparent to-black w-full">
                        <h2 className="text-xl font-semibold 5 text-white max-w-full line-clamp-1">
                          {data?.[1]?.[titles.title]}
                        </h2>
                        <p className="text-base leading-4 text-white mt-2 max-w-full line-clamp-2">
                          {data?.[1]?.[titles.description]}
                        </p>
                        <Link
                          to={`/blog/${data?.[1]?.id}`}
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            {GENERAL_WORDS?.[titles.read_btn]}
                          </p>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg"
                            alt="arrow"
                          />
                        </Link>
                      </div>
                    </div>
                    <img
                      src={IMAGE_URL + data?.[1]?.jpgId}
                      className="w-full aspect-square object-cover"
                      alt="news image"
                    />
                  </Link>
                )}
              </div>
              {data?.[2] && (
                <Link to={`/blog/${data?.[2]?.id}`} className="relative">
                  <div>
                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {data?.[2]?.createdDate?.slice(0, 10)}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-b from-transparent to-black w-full">
                      <h2 className="text-xl font-semibold 5 text-white max-w-full line-clamp-1">
                        {data?.[2]?.[titles.title]}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2 max-w-full line-clamp-2">
                        {data?.[2]?.[titles.description]}
                      </p>
                      <Link
                        to={`/blog/${data?.[2]?.id}`}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          {GENERAL_WORDS?.[titles.read_btn]}
                        </p>
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg"
                          alt="arrow"
                        />
                      </Link>
                    </div>
                  </div>
                  <img
                    src={IMAGE_URL + data?.[2]?.jpgId}
                    alt="sitting place"
                    className="w-full aspect-square object-cover pt-8"
                  />
                </Link>
              )}
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              {data?.[3] && (
                <Link to={`/blog/${data?.[3]?.id}`} className="relative">
                  <div>
                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {data?.[3]?.createdDate?.slice(0, 10)}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-b from-transparent to-black w-full">
                      <h2 className="text-xl font-semibold 5 text-white max-w-full line-clamp-1">
                        {data?.[3]?.[titles.title]}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2 max-w-full line-clamp-2">
                        {data?.[3]?.[titles.description]}
                      </p>
                      <Link
                        to={`/blog/${data?.[3]?.id}`}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          {GENERAL_WORDS?.[titles.read_btn]}
                        </p>
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg"
                          alt="arrow"
                        />
                      </Link>
                    </div>
                  </div>
                  <img
                    src={IMAGE_URL + data?.[3]?.jpgId}
                    alt="news image"
                    className="w-full aspect-square object-cover"
                  />
                </Link>
              )}
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                {data?.[4] && (
                  <Link
                    to={`/blog/${data?.[4]?.id}`}
                    className="sm:w-1/2 relative"
                  >
                    <div>
                      <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        {data?.[4]?.createdDate?.slice(0, 10)}
                      </p>
                      <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-b from-transparent to-black w-full">
                        <h2 className="text-xl font-semibold 5 text-white max-w-full line-clamp-1">
                          {data?.[4]?.[titles.title]}
                        </h2>
                        <p className="text-base leading-4 text-white mt-2 max-w-full line-clamp-2">
                          {data?.[4]?.[titles.description]}
                        </p>
                        <Link
                          to={`/blog/${data?.[4]?.id}`}
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            {GENERAL_WORDS?.[titles.read_btn]}
                          </p>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg"
                            alt="arrow"
                          />
                        </Link>
                      </div>
                    </div>
                    <img
                      src={IMAGE_URL + data?.[4]?.jpgId}
                      className="w-full aspect-square object-cover"
                      alt="news image"
                    />
                  </Link>
                )}
                {data?.[5] && (
                  <Link
                    to={`/blog/${data?.[5]?.id}`}
                    className="sm:w-1/2 sm:mt-0 mt-4 relative"
                  >
                    <div>
                      <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        {data?.[5]?.createdDate?.slice(0, 10)}
                      </p>
                      <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-b from-transparent to-black w-full">
                        <h2 className="text-xl font-semibold 5 text-white max-w-full line-clamp-1">
                          {data?.[5]?.[titles.title]}
                        </h2>
                        <p className="text-base leading-4 text-white mt-2 max-w-full line-clamp-2">
                          {data?.[5]?.[titles.description]}
                        </p>
                        <Link
                          to={`/blog/${data?.[5]?.id}`}
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            {GENERAL_WORDS?.[titles.read_btn]}
                          </p>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg"
                            alt="arrow"
                          />
                        </Link>
                      </div>
                    </div>
                    <img
                      src={IMAGE_URL + data?.[5]?.jpgId}
                      className="w-full aspect-square object-cover"
                      alt="news image"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data?.slice(6, data?.length)?.map?.((item, ind) => {
              return (
                <Link
                  key={ind}
                  to={`/blog/${item?.id}`}
                  data-aos="fade-right"
                  data-aos-delay={`${ind}00`}
                  className="mb-0 overflow-hidden bg-white rounded shadow-lg border"
                >
                  <div className="relative overflow-hidden h-96">
                    <img
                      className="object-cover w-full h-full transition-all hover:scale-105"
                      src={IMAGE_URL + item?.jpgId}
                      alt="news image"
                    />
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-b from-transparent to-black w-full">
                      <h2 className="text-xl font-semibold 5 text-white max-w-full line-clamp-1">
                        {item?.[titles.title]}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2 max-w-full line-clamp-2">
                        {item?.[titles.description]}
                      </p>
                      <Link
                        to={`/blog/${item?.id}`}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          {GENERAL_WORDS?.[titles.read_btn]}
                        </p>
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg"
                          alt="arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
