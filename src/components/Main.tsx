import { Link } from "react-router-dom";

import content from "../content.json";

import mapLogo from "../images/maplogo.png";
import Minecraft from "../images/steve_phone.png";
import Online from "../images/div.svg";
import telegram from "../images/telegram_button.png";
import discord from "../images/discord.png";

export const Main = () => {
  return (
    <div className="">
      <div className="flex justify-center min-h-screen pad:max-w-md pad:m-auto gap-6 laptop:pt-0 pt-40 bg-[url('/src/images/Figures.png')] tv:bg-none">
        <div className="minidesktop:mt-[70px] mt-[80px]">
          <div className="flex gap-20 pad:gap-10 mobile:gap-7 mobile:items-center mobile:ml-5">
            <p className="text-base pad:text-sm pad:w-[190px] mobile:text-xs mobile:w-auto opacity-45">
              {content.versionSupport}
            </p>
            <div className="flex pad:w-[160px]">
              <img
                src={Online}
                className="pad:w-4 pad:h-4 pad:pt-2 mobile:pt-1 mobile:pb-1"
                alt=""
              />
              <p className="text-base pad:text-sm mobile:text-xs pad:ml-0 mobile:w-auto opacity-45 ml-1">
                {content.online}
              </p>
            </div>
          </div>
          <h1 className="mt-10 mb-10 text-5xl pad:text-4xl pad:text-center mobile:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-green-500 text-transparent bg-clip-text">
            {content.name}
          </h1>
          <p className="max-w-lg pad:max-w-sm mobile:text-base mobile:text-center text-xl pad:text-lg opacity-45">
            {content.welcomeText1}
          </p>
          <p className="max-w-lg pad:max-w-sm text-xl mobile:text-base mobile:text-center pad:text-lg opacity-45">
            {content.welcomeText2}
          </p>
          <Link to="/map" className="flex justify-center">
            <div className="bg-[url('/src/images/Navigation1.svg')] w-[318px] h-[48px] mt-[100px] opacity-100 hover:opacity-70">
              <img src={mapLogo} className="ml-[90px] mt-[15px]" />
            </div>
          </Link>
          <div className="flex laptop:flex-col laptop:items-center mt-[60px] gap-[30px]">
            <button className="flex bg-[url('/src/images/bd2.svg')] w-[253px] h-[64px] justify-start items-center gap-4 opacity-100 hover:opacity-70">
              <img src={discord} alt="" className="w-[40px] ml-4" />
              <div>
                <p className="text-start">{content.discord}</p>
                <p className="text-sm opacity-45">{content.discordLink}</p>
              </div>
            </button>
            <button className="flex bg-[url('/src/images/bd2.svg')] w-[253px] h-[64px] justify-start items-center gap-4 opacity-100 hover:opacity-70">
              <img src={telegram} alt="" className="w-[40px] ml-4" />
              <div>
                <p className="text-start">{content.telegram}</p>
                <p className="text-sm opacity-45">{content.telegramLink}</p>
              </div>
            </button>
          </div>
        </div>
        <div className="laptop:hidden">
          <img src={Minecraft} className="h-[850px]" alt="" />
        </div>
      </div>
      <p className="absolute left-10 end-10 pt-3 pb-5 opacity-45 text-base mobile:text-sm pad:text-center">
        {content.technicalSupport}
      </p>
    </div>
  );
};
