import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlices";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import style from "../style/Forms.module.css";

function Login() {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const submitLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        toast("Kirish amalga oshirildi");
        navi("/");
      })
      .catch((error) => {
        toast(`Xato: ${error}`);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <form className={style.forms} onSubmit={handleSubmit(submitLogin)}>
      <button className="btn">
        <Link to={"/register"}>Sign Up</Link>
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
