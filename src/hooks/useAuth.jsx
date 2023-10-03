import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";

function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const auth = getAuth();

  const signUp = async (email, password) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({ email: user.email, password: user.password });
        navigate("/");
        setLoading(false);
        toast("Ro'yxatdan o'tdingiz!");
      })
      .catch((error) => {
        setError(error);
        toast("Nimadur xato ketdi!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signIn = async (email, password) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({ email: user.email, password: user.password });
        navigate("/");
        setLoading(false);
        toast("Kirish muvfaqiyatli yakunlandi!");
      })
      .catch((error) => {
        setError(error);
        toast("Nimadur xato ketdi!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        const result = error;
        setError(result.message);
      });
  };

  return { signUp, signIn, logout, user, loading, error };
}

export { useAuth };
