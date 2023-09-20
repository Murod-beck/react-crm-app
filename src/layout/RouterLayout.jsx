import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Sidebar from "../pages/Sidebar";

function RouterLayout() {
  return (
    <>
      <Header />
      <div className="row">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RouterLayout;
