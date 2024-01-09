import React from "react";

const Team = () => {
  return (
    <div>
      <section className="flex items-center py-5 lg:py-10 font-poppins">
        <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div className="mb-10 text-center">
            <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase">
              Team
            </span>
            <h1 className="text-3xl font-bold capitalize">
              {" "}
              Our Perfect Team{" "}
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {new Array(8).fill(null).map((_, ind) => (
              <div
                key={ind}
                className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row"
              >
                <div className="inline-block w-full mb-3 overflow-hidden text-xs text-white md:rounded-full h-96 sm:w-64 sm:h-64">
                  <img
                    className="object-cover w-full h-full transition-all hover:scale-110"
                    src={`https://picsum.photos/id/${ind * 11}/200/300`}
                    alt="user image"
                  />
                </div>
                <div className="relative flex self-center flex-1 lg:ml-8 ">
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">Harry Singh</h2>
                    <p className="mb-4 text-sm font-medium text-blue-500">
                      Director
                    </p>
                    <p className="mb-6 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetu incididunt ut
                      dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="flex">
                      <span className="inline-block mr-5 text-gray-700 hover:text-blue-500">
                        <span className="fa-brands fa-telegram fa-xl" />
                      </span>
                      <span className="inline-block mr-5 text-gray-700 hover:text-blue-500">
                        <span className="fa-brands fa-facebook-f fa-xl" />
                      </span>
                      <span className="inline-block mr-5 text-gray-700 hover:text-blue-500">
                        <span className="fa-brands fa-instagram fa-xl" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
