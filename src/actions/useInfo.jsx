import { getDatabase, ref, onValue, update } from "firebase/database";
import { useEffect, useState } from "react";
import { useUid } from "../actions/useUid";
import { toast } from "react-toastify";

function useInfo() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const db = getDatabase();
  const uid = useUid();

  const updateInfo = (bill) => {
    const updateData = { ...info, ...bill };
    update(ref(db, `users/${uid}/info`), updateData);
    console.log(bill);
  };

  useEffect(() => {
    try {
      setLoading(true);
      onValue(ref(db, `users/${uid}/info`), (snapshot) => {
        const respons = (snapshot.val() && snapshot.val()) || "Anonymous";
        setInfo(respons);
        setLoading(false);
      });
    } catch (error) {
      toast(error.message);
    }
  }, [db, uid]);

  return { info, loading, updateInfo };
}

export { useInfo };
