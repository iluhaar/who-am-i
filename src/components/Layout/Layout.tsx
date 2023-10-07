import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Sidebar activePath={location.pathname} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
