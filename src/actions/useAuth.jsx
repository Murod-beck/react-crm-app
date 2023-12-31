import { getDatabase, set, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/slicesUser";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";

function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();

  const signUp = async (email, password, names) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            uid: user.uid,
          })
        );
        set(ref(db, "users/" + user.uid + "/info"), {
          username: names,
          bill: 10000,
        });
        navigate("/");
        toast("Ro'yxatdan o'tdingiz!");
      })
      .catch((error) => {
        toast(`Nimadur xato ketdi! ${error.code}`);
      });
  };

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            uid: user.uid,
          })
        );
        navigate("/");
        toast("Kirish muvfaqiyatli yakunlandi!");
      })
      .catch((error) => {
        toast(`Nimadur xato ketdi! ${error.code}`);
      });
  };

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        dispatch(setUser({}));
      })
      .catch((error) => {
        toast(`Nimadur xato ketdi! ${error.code}`);
      });
  };

  return { signUp, signIn, logout };
}

export { useAuth };
