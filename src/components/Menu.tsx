import content from "../content.json";

import { Link } from "react-router-dom";

import logo from "../images/logo1.png";
import discord from "../images/discord.png";
import vk from "../images/vk.png";

export const Menu = () => {
  return (
    <>
      <div className="absolute bg-[#0C1715] max-w-7xl mt-14 right-0 left-0 ml-auto mr-auto rounded-full flex justify-between border border-[#213F38]">
        <div className="flex m-5 mobile:ml-0 basis-1/3">
          <img src={logo} alt="logo" className="w-8 ml-8" />
          <h2 className="text-[#9B9B9B] ml-1 font-medium indent-px text-2xl p-0.5">
            {content.company}
          </h2>
        </div>
        <div className="desktop:flex laptop:hidden gap-2 items-center basis-1/3 justify-center">
          <Link to="/" className="text-base opacity-45 hover:opacity-100">
            {content.main}
          </Link>
          <Link to="/mode" className="text-base opacity-45 hover:opacity-100">
            {content.aboutTheMode}
          </Link>
          <Link to="/news" className="text-base opacity-45 hover:opacity-100">
            {content.news}
          </Link>
          <Link to="/" className="text-base opacity-45 hover:opacity-100">
            {content.top}
          </Link>
          <Link to="/" className="text-base opacity-45 hover:opacity-100">
            {content.store}
          </Link>
        </div>
        <div className="flex basis-1/3 mobile:pr-5 items-center justify-end gap-2 pr-9">
          <a>
            <img src={discord} alt="discord" className="w-10" />
          </a>
          <a>
            <img src={vk} alt="vk" className="w-10" />
          </a>
        </div>
      </div>
    </>
  );
};
