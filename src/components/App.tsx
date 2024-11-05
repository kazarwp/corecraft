import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { Menu } from "./Menu";
import { Main } from "./Main";
import { ErrorPage } from "./ErrorPage";
import { RoadMap } from "./RoadMap";
import { News } from "./News";
import { Mode } from "./Mode";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index errorElement={<ErrorPage />} element={<Main />} />
          <Route path="/map" element={<RoadMap />} />
          <Route path="/news" element={<News />} />
          <Route path="/mode" element={<Mode />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
