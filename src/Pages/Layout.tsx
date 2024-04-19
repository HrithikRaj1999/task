import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar";
const Layout = () => {
  //here we can do helmet optimisation SEO
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
