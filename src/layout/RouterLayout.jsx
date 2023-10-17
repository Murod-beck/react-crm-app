import { Outlet } from "react-router-dom";
import Header from "../apps/Header";
import Footer from "../apps/Footer";
import Sidebar from "../apps/Sidebar";

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
