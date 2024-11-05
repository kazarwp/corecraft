import content from "../content.json";

import openPhoto2 from "../images/news_open_2.png";
import teamLeed1 from "../images/teamLeed1.png";
import teamLeed2 from "../images/teamLeed2.png";
import dev from "../images/dev.png";
import host from "../images/host.png";
import { Link } from "react-router-dom";

export const Mode = () => {
  return (
    <div className="pt-[180px] laptop:pt-[240px] minilaptop:pt-[150px]">
      <div className="flex minilaptop:flex-col minilaptop:items-center justify-center gap-[250px] laptop:gap-[50px]">
        <div className="max-w-[400px] pt-[100px]">
          <Link to="/" className="text-base opacity-100 hover:opacity-45">
            &nbsp;{content.mainTextModePage} &nbsp;&nbsp;&gt;
          </Link>
          <button className="text-base text-[#E47500] opacity-100 hover:opacity-45">
            &nbsp;{content.aboutMode}
          </button>
          <h2 className="font-bold text-3xl mt-[35px]">
            Режим GTM, это заруба, это грабёж
          </h2>
          <p className="text-base mt-[52px]">{content.GTM_text}</p>
          <button className="flex bg-gradient-to-r from-[#FA8305] to-[#FB9E3C] p-[10px] text-base mt-[55px] rounded-[40px]">
            <p>{content.modeJoin}</p>
            <p className="text-[20px] ml-[10px] mr-[10px]">→</p>
          </button>
        </div>
        <img src={openPhoto2} alt="" />
      </div>
      <div className="laptop:mt-[20px]">
        <h2 className="ml-[380px] minilaptop:ml-7 minilaptop:text-4xl minilaptop:pb-[10px] text-2xl pb-[50px] max-w-[140px]">
          {content.possibility}
        </h2>
        <div className="flex pad:flex-col justify-center gap-[40px] laptop:gap-[20px]">
          <div className="bg-[#0D0F0F] pt-[60px] pb-[60px] pl-[30px] pr-[30px]">
            <h3 className="bg-[#B000DC]/30 max-w-[140px] rounded-lg text-sm pl-3 pt-2 pb-2">
              {content.possibilityText}
            </h3>
            <h2 className="text-xl pt-5">Lorem Ipsum</h2>
            <p className="text-sm max-w-[300px] pt-5">
              {content.modePageRandom1}
            </p>
          </div>
          <div className="bg-[#0D0F0F] pt-[60px] pb-[60px] pl-[30px] pr-[30px]">
            <h3 className="bg-[#DC4200]/30 max-w-[140px] rounded-lg text-sm pl-3 pt-2 pb-2">
              {content.modePageRandom2}
            </h3>
            <h2 className="text-xl pt-5">{content.modePageRandom3}</h2>
            <p className="text-sm max-w-[300px] pt-5">
              {content.modePageRandom4}
            </p>
          </div>
          <div className="bg-[#0D0F0F] pt-[60px] pb-[60px] pl-[30px] pr-[30px]">
            <h3 className="bg-[#00DC8D]/30 max-w-[140px] rounded-lg text-sm pl-3 pt-2 pb-2">
              {content.modePageRandom5}
            </h3>
            <h2 className="text-xl pt-5">{content.modePageRandom7}</h2>
            <p className="text-sm max-w-[300px] pt-5">
              {content.modePageRandom6}
            </p>
          </div>
        </div>
      </div>
      <div className="flex minilaptop:flex-col-reverse justify-center mt-[180px] minilaptop:mt-0 gap-[130px] laptop:gap-[50px] mb-[150px] minilaptop:mb-0 bg-[#0D0F0F] pt-[80px] pb-[80px]">
        <img src={openPhoto2} alt="" className="rounded-[12px]" />
        <div className="max-w-[536px] pt-[100px] minilaptop:pt-0 minilaptop:ml-4">
          <p className="text-base mb-[32px]">Lorem ipsum</p>
          <h2 className="font-semibold text-3xl">{content.modePageRandom8}</h2>
          <p className="text-base mt-[52px]">{content.modePageRandom9}</p>
        </div>
      </div>
      <div>
        <h2 className="text-[45px] ml-[380px] minilaptop:ml-7 font-semibold">
          {content.modePageRandom10}
        </h2>
        <div className="flex justify-center gap-6 laptop:gap-1 mt-6 pad:flex-col">
          <div className="pad:flex pad:justify-center pad:gap-10 bg-[#0D0F0F] pt-[40px] pl-[80px] pb-[40px] pr-[80px] minilaptop:pt-[20px] minilaptop:pl-[40px] minilaptop:pb-[20px] minilaptop:pr-[40px]  rounded-2xl">
            <img src={teamLeed1} alt="" />
            <div className="pad:self-center">
              <h3 className="text-lg font-semibold text-center">
                {content.modePageTeamLeadName}
              </h3>
              <p className="text-base text-center">
                {content.modePageTeamLead}
              </p>
            </div>
          </div>
          <div className="pad:flex pad:justify-center pad:gap-10 bg-[#0D0F0F] pt-[40px] pl-[80px] pb-[40px] pr-[80px] minilaptop:pt-[20px] minilaptop:pl-[40px] minilaptop:pb-[20px] minilaptop:pr-[40px] rounded-2xl">
            <img src={host} alt="" />
            <div className="pad:self-center">
              <h3 className="text-lg font-semibold text-center">
                {content.yarik}
              </h3>
              <p className="text-base text-center">{content.host}</p>
            </div>
          </div>
          <div className="pad:flex pad:justify-center pad:gap-10 bg-[#0D0F0F] pt-[40px] pl-[80px] pb-[40px] pr-[80px] minilaptop:pt-[20px] minilaptop:pl-[40px] minilaptop:pb-[20px] minilaptop:pr-[40px] rounded-2xl">
            <img src={dev} alt="" />
            <div className="pad:self-center">
              <h3 className="text-lg font-semibold text-center">
                {content.vanya}
              </h3>
              <p className="text-base text-center">{content.dev}</p>
            </div>
          </div>
          <div className="pad:flex pad:justify-center pad:gap-10 bg-[#0D0F0F] pt-[40px] pl-[80px] pb-[40px] pr-[80px] minilaptop:pt-[20px] minilaptop:pl-[40px] minilaptop:pb-[20px] minilaptop:pr-[40px] rounded-2xl">
            <img src={teamLeed2} alt="" />
            <div className="pad:self-center">
              <h3 className="text-lg font-semibold text-center">
                {content.damir}
              </h3>
              <p className="text-base text-center">
                {content.modePageTeamLead}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0D0F0F] mt-[250px] minilaptop:mt-0 minilaptop:ml-4 pt-[100px]">
        <div className="max-w-[1200px] m-auto">
          <p className="text-base">{content.modePageRandom10}</p>
          <p className="mt-[25px] text-3xl font-semibold">
            {content.modePageRandom11}
          </p>
          <p className="mt-[200px] text-base">{content.modePageRandom12}</p>
        </div>
      </div>
    </div>
  );
};
