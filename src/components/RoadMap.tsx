import content from "../content.json";

import { Link } from "react-router-dom";
import telega from "../images/minecraft_telega.svg";

export const RoadMap = () => {
  return (
    <div className="bg-[url('/src/images/RoudMap.svg')] bg_desktop:bg-none min-h-[2809px] w-screen bg-cover">
      <div className="pl-[13%] pad:pl-[5%]">
        <div className="pt-[230px] laptop:pt-[60px]">
          <Link to="/" className="text-base opacity-100 hover:opacity-45">
            &nbsp;{content.main}&nbsp;
          </Link>
          <span>&nbsp;&gt;</span>
          <span className="text-base text-[#E47500]">
            &nbsp;{content.roadMap}
          </span>
        </div>
        <h2 className="minilaptop:text-3xl mt-3 mb-3 text-5xl text-[#87DDEE]">
          {content.roadMap}
        </h2>
        <p className=" mb-10">{content.pathPageRoad}</p>
      </div>
      <div className="flex mt-0 m-auto max-w-[72.65%] min-h-[1136px] bg-[url('/src/images/Sub_Container.png')] laptop:bg-none laptop:bg-[#1C1C1C] rounded-[55px] bg-cover">
        <div className="m-[50px] pad:m-[30px] max-w-[100%] flex gap-[20px] justify-center flex-wrap md:gap-[10px] md:m-[20px]">
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Table.png')] w-[63px] h-[67px] mt-[20px] m-auto">
              <img src={telega} className="w-[43px] h-[47px] m-auto" />
            </div>
            <p className="text-center mt-[15px] mb-[15px]">{content.page}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">
              {content.launcher}
            </p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.gtm}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test1}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.prize}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test2}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.wiki}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.forum}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">
              {content.discordRoad}
            </p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test3}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test4}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test5}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test7}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test8}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test9}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test10}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test11}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test12}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">{content.test13}</p>
          </div>
          <div className="w-[308px] maxpad:w-[250px] pad:w-[200px] mobile:w-[170px] max-h-[181px] bg-[#1A1A1A] rounded-2xl">
            <div className="bg-[url('/src/images/Icon_Container.png')] w-[78px] h-[78px] mt-[20px] m-auto"></div>
            <p className="text-center mt-[15px] mb-[15px]">
              {content.test14}ст
            </p>
          </div>
        </div>
      </div>
      <p className="text-3xl ml-[13%] pad:ml-[5%] mt-[150px]">
        {content.statistics}
      </p>
      <p className="text-lg	text-[#B3B3B3] ml-[13%] pad:ml-[5%] mt-[15px]">
        {content.progress}
      </p>
      <div className="flex desktoppoint:flex-col desktoppoint:items-start desktoppoint:ml-[13%] desktoppoint:ml-0 ml-[13%] pad:ml-[5%] mt-[78px]">
        <div className="pr-[90px] pad: desktoppoint:p-0 border-r-2 border-dashed minilaptop:border-none border-[#262626]">
          <p className="text-[#87DDEE] text-6xl font-medium">
            {content.ranksNumber}
          </p>
          <p className="text-2xl	text-[#B3B3B3]">{content.ranks}</p>
        </div>
        <div className="pr-[90px] pl-[50px] minilaptop:mt-5 desktoppoint:p-0 border-r-2 minilaptop:border-none border-dashed border-[#262626]">
          <p className="text-[#87DDEE] text-6xl font-medium">
            {content.donationsNumber}
          </p>
          <p className="text-2xl	text-[#B3B3B3]">{content.donations}</p>
        </div>
        <div className="pr-[90px] desktoppoint:p-0  minilaptop:mt-5 pl-[50px]">
          <p className="text-[#87DDEE] text-6xl font-medium">
            {content.groupNumber}
          </p>
          <p className="text-2xl	text-[#B3B3B3]">{content.group}</p>
        </div>
      </div>
      <Link
        to="/news "
        className="absolute mt-[20px] mobile:ml-[5%] pad:ml-[5%] bg-[#1C1C1C] p-[15px] rounded-[82px] text-lg ml-[13%] hover:bg-black"
      >
        {content.checkNews}
      </Link>
      <div className="ml-[13%] mb-10 pad:ml-mr-auto mt-[200px] pad:mt-[150px] rounded-3xl max-w-[1394px] bg-[url('/src/images/CTA_Section.png')] w-[72%] h-[261px] pad:h-auto pt-[80px] pad:p-[30px] mobile:p-[20px] pl-[80px] minilaptop:pl-5">
        <p className="text-[40px] pad:text-xl mobile:text-base">
          {content.questions}
        </p>
        <p className="text-lg pad:text-base mobile:text-sm text-[#B3B3B3]">
          {content.support}
        </p>
      </div>
    </div>
  );
};
