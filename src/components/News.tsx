import content from "../content.json";

import openPhoto from "../images/news_open.png";
import checkMark from "../images/check_mark.png";
import openPhoto2 from "../images/news_open_2.png";
import { Link } from "react-router-dom";

export const News = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-[url('/src/images/screen-news.png')] min-h-[711px] bg-cover">
        <div className="flex flex-col bg-[#252424] opacity-[87%] rounded-[8px] pt-[25px] maxpad:max-w-[450px] pad:max-w-[390px] mobile:max-w-[310px]">
          <h2 className="min-w-[628px] text-center maxpad:min-w-[450px] pad:min-w-[390px] mobile:min-w-[310px] text-5xl">
            {content.newsTitle}
          </h2>
          <div className="pl-[5px] pr-[5px] pb-[5px] text-start">
            <Link to="/" className="text-base opacity-100 hover:opacity-45">
              &nbsp;{content.main} &nbsp;&nbsp;
            </Link>
            <span>&gt;</span>
            <span className="text-base text-[#E47500]">
              &nbsp;{content.newsTitle}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[180px] minilaptop:mt-[70px] gap-[150px] minidesktop:gap-[80px] minilaptop:flex-col minilaptop:items-center minilaptop:mt-50px minilaptop:gap-[50px]">
        <img src={openPhoto} alt="" className="minidesktop:max-w-[500px] minilaptop:max-w-[661px] maxpad:max-w-[500px] pad:max-w-[400px] mobile:max-w-[315px]"/>
        <div className="minilaptop:ml-[110px] maxpad:self-center maxpad:ml-5 minilaptop:self-start">
          <h2 className="font-bold text-3xl pad:text-2xl">{content.openTitle}</h2>
          <h2 className="font-bold text-3xl mt-[20px] pad:text-2xl">{content.date}</h2>
          <p className="mt-[25px] max-w-[400px]">
            {content.newsPageTitle}
          </p>
          <div className="flex gap-3 mt-[25px]">
            <img src={checkMark} alt="" />
            <p>{content.spawn}</p>
          </div>
          <div className="flex gap-3 mt-[20px]">
            <img src={checkMark} alt="" />
            <p>{content.gun}</p>
          </div>
          <div className="flex gap-3 mt-[20px]">
            <img src={checkMark} alt="" />
            <p>{content.economic}</p>
          </div>
          <div className="flex gap-3 mt-[20px]">
            <img src={checkMark} alt="" />
            <p>{content.ranksSystem}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[180px] gap-[50px] minidesktop:gap-[20px] minilaptop:flex-col-reverse minilaptop:items-center minilaptop:mt-50px minilaptop:gap-[50px]">
        <div className="max-w-[536px] minidesktop:ml-4 minilaptop:ml-5">
          <h2 className="font-bold text-3xl pad:text-2xl">
            {content.randomTextNewsPage}
          </h2>
          <p className="text-base mt-[52px]">
            {content.randomTextNewsPage1}
          </p>
          <p className="text-base mt-[52px]">
            {content.randomTextNewsPage2}
          </p>
          <button className="bg-[#DC7000] p-[15px] text-base mt-[55px] opacity-100 hover:opacity-45">
            {content.subscribe}
          </button>
        </div>
        <img src={openPhoto} alt="" className="minidesktop:max-w-[500px] minilaptop:max-w-[661px] maxpad:max-w-[500px] pad:max-w-[400px] mobile:max-w-[310px]"  />
      </div>
      <div className="flex justify-center mt-[180px] gap-[250px] mb-[150px] minidesktop:gap-[10px] minilaptop:flex-col minilaptop:items-center minilaptop:mt-50px minilaptop:gap-[50px]">
        <img src={openPhoto2} alt="" className="minidesktop:max-w-[500px] minilaptop:max-w-[661px] maxpad:max-w-[500px] pad:max-w-[400px] mobile:max-w-[315px]"/>
        <div className="max-w-[536px] minidesktop:ml-4 minilaptop:ml-5">
          <h2 className="font-bold text-3xl pad:text-2xl">
            {content.randomTextNewsPage3}
          </h2>
          <p className="text-base mt-[52px]">
            {content.randomTextNewsPage4}
          </p>
          <p className="text-base mt-[52px]">
            {content.randomTextNEwsPage5}
          </p>
          <button className="bg-[#DC7000] p-[15px] text-base mt-[55px] opacity-100 hover:opacity-45">
            {content.subscribe}
          </button>
        </div>
      </div>
    </div>
  );
};
