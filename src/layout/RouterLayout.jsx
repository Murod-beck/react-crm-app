import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Sidebar from "../pages/Sidebar";

function RouterLayout() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 text-white">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RouterLayout;
