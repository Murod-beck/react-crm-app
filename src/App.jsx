import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style/App.css";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RouterLayout from "./layout/RouterLayout";
import Profile from "./component/Profile";
import Home from "./component/Home";
import Categoris from "./component/Categoris";
import Detail from "./component/Detail";
import History from "./component/History";
import Planning from "./component/Planning";
import Record from "./component/Record";

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
          <Route path="detail" element={<Detail />} />
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
