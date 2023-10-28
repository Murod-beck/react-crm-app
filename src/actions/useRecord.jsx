import { getDatabase, ref, push, onValue } from "firebase/database";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useUid } from "./useUid";

function useRecord() {
  const [records, setRecords] = useState([]);
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

  useEffect(() => {
    try {
      onValue(ref(db, `users/${uid}/records`), (snapshot) => {
        const records = (snapshot.val() && snapshot.val()) || "1";
        setRecords(
          Object.keys(records).map((key) => ({ ...records[key], id: key }))
        );
      });
    } catch (error) {
      toast(error.message);
    }
  }, [db, uid]);

  return { createRecord, records };
}

export { useRecord };
