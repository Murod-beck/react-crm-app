import { getAuth } from "firebase/auth";

function useUid() {
  const uid = getAuth().currentUser;
  return uid ? uid.uid : null;
}
export { useUid };
