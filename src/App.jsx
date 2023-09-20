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
import Categoris from "./component/Categoris";
import Home from "./component/Home";

function App() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<RouterLayout />}>
          <Route index element={<Home />} />
          <Route path="categoris" element={<Categoris />} />
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
