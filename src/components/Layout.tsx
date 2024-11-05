import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";
import { MenuLineButton } from "./MenuLineButton";

export const Layout = () => {
  return (
    <>
      <Menu />
      <MenuLineButton />
      <Outlet />
    </>
  );
};
