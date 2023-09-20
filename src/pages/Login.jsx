import { Link } from "react-router-dom";
import style from "../style/Forms.module.css";
function Login() {
  return (
    <form className={style.forms}>
      <button className="btn">
        <Link to={"/register"}>Sign Up</Link>
        <i className="bi bi-box-arrow-in-left"></i>
      </button>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" />
      </div>
      <button type="submit" className="btn">
        Send
        <i className="bi bi-send"></i>
      </button>
    </form>
  );
}

export default Login;
