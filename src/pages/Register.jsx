import { Link } from "react-router-dom";
import style from "../style/Forms.module.css";
function Register() {
  return (
    <form className={style.forms}>
      <button className="btn">
        <Link to={"/login"}>Login</Link>
        <i className="bi bi-box-arrow-in-left"></i>
      </button>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Family</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" />
      </div>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">Check </label>
      </div>
      <button type="submit" className="btn">
        Send
        <i className="bi bi-send"></i>
      </button>
    </form>
  );
}

export default Register;
