import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HOME_CONTACT } from "../../../constants";

const Call = () => {
  const language = useSelector((state) => state.language.lang);
  const [titles, setTitles] = useState({
    title: `title_${language}`,
    title2: `title2_${language}`,
  });

  useEffect(() => {
    setTitles({
      title: `title_${language}`,
      title2: `title2_${language}`,
    });
  }, [language]);

  return (
    <div className="container mx-auto min-h-48 mt-32">
      <div className="text-center bg-trucks">
        <div className="text-center uppercase">
          <h3 className="text-neutral-500 text-xl font-bold" data-aos="fade-up">
            {HOME_CONTACT[titles.title]}
          </h3>
          <div className="my-2" data-aos="fade-up" data-aos-delay="150">
            <span className="fa-solid fa-phone-volume text-3xl pr-5 " />
            <a
              href="tel:+1 937-865-6660"
              className="text-yellow-400 text-3xl font-semibold"
            >
              +1 937-865-6660
            </a>
          </div>
          <p
            className="text-xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {HOME_CONTACT[titles.title2]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Call;
