import content from "../content.json";
import { Link } from "react-router-dom";

export const MenuLineButton = () => {
  return (
    <div className="desktop:hidden laptop:flex gap-3 items-center basis-1/3 justify-center absolute top-40 p-4 right-0 left-0 ml-auto mr-auto bg-[#0C1715]">
      <Link to="/" className="text-xl opacity-45 mobile:text-xs hover:opacity-100">
        {content.main}
      </Link>
      <Link to="/mode" className="text-xl pad:text-base mobile:text-xs opacity-45 hover:opacity-100">
        {content.aboutTheMode}
      </Link>
      <Link to="/news" className="text-xl pad:text-base mobile:text-xs opacity-45 hover:opacity-100">
        {content.news}
      </Link>
      <Link to="/" className="text-xl pad:text-base mobile:text-xs opacity-45 hover:opacity-100">
        {content.top}
      </Link>
      <Link to="/" className="text-xl pad:text-base mobile:text-xs opacity-45 hover:opacity-100">
        {content.store}
      </Link>
    </div>
  );
};
