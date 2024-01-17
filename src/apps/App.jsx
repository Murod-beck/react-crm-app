import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/App.css";
import AuthLayout from "../layout/AuthLayout";
import Login from "./Login";
import Register from "./Register";
import RouterLayout from "../layout/RouterLayout";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Categoris from "../pages/Categoris";
import Detail from "../pages/Detail";
import History from "../pages/History";
import Planning from "../pages/Planning";
import Record from "../pages/Record";

function App() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<RouterLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="planning" element={<Planning />} />
          <Route path="record" element={<Record />} />
          <Route path="catigoris" element={<Categoris />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
