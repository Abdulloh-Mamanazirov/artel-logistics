import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Empty } from "../../assets";
import { EMPTY } from "../../constants";

const index = () => {
  const language = useSelector((state) => state.language.lang);
  const [lang, setLang] = useState(language);

  useEffect(() => {
    setLang(language);
  }, [language]);

  return (
    <div
      className="w-full inline-flex items-center justify-center flex-col"
      data-aos="fade"
      data-aos-delay="150"
    >
      <img src={Empty} alt="empty" />
      <p>{EMPTY[lang]}</p>
    </div>
  );
};

export default index;
