import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import style from "../style/Forms.module.css";

function Register() {
  const [names, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const submitRegister = () => {
    signUp(email, password, names);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className={style.forms} onSubmit={handleSubmit(submitRegister)}>
      <button className="btn">
        <Link to={"/login?message=logout"}>Sign In</Link>
        <i className="bi bi-box-arrow-in-left"></i>
      </button>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          {...register("names", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          value={names}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
        />
        <div className={style.errors}>
          {errors?.names && <p>{errors?.names?.message || "Name"}</p>}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          {...register("email", {
            required: "Email kiriting!",
            pattern: /^\S+@\S+$/i,
          })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="form-control"
        />
        <div className={style.errors}>
          {errors?.email && <p>{errors?.email?.message || "Email"}</p>}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
        <div className={style.errors}>
          {errors?.password && <p>{errors?.password?.message || "Password"}</p>}
        </div>
      </div>

      <div className="mb-3">
        <input
          {...register("Developer", { required: true })}
          className="form-check-input"
          type="checkbox"
          value="Yes"
        />
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
