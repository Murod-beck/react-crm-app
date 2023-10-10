import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import style from "../style/Forms.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const submitLogin = () => {
    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form className={style.forms} onSubmit={handleSubmit(submitLogin)}>
      <button className="btn">
        <Link to={"/register?message=logout"}>Sign Up</Link>
        <i className="bi bi-box-arrow-in-left"></i>
      </button>

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
          {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
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
          {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
        </div>
      </div>

      <button type="submit" className="btn">
        Send
        <i className="bi bi-send"></i>
      </button>
    </form>
  );
}

export default Login;
