import { getDatabase, ref, push } from "firebase/database";
import { toast } from "react-toastify";
import { useUid } from "./useUid";

function useRecord() {
  const uid = useUid();
  const db = getDatabase();
  const createRecord = async (record) => {
    try {
      await push(ref(db, `users/${uid}/records`), record);
      toast("Created Record");
    } catch (error) {
      toast(error.message);
    }
  };

  return { createRecord };
}

export { useRecord };
