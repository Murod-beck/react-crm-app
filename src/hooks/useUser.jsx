import { useSelector } from "react-redux";

export function useUser() {
  const { email, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    id,
  };
}
