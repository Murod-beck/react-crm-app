import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
function useInfo() {
  const [info, setInfo] = useState({});
  const [uid, setUid] = useState("");
  const [date, setDate] = useState("");
  const [currency, setCurrency] = useState("");
  const db = getDatabase();

  useEffect(() => {
    onValue(ref(db, "users/" + uid), (snapshot) => {
      const data = (snapshot.val() && snapshot.val()) || "Anonymous";
      setInfo(data);
    });

    const getUid = () => {
      const user = getAuth().currentUser;
      setUid(user ? user.uid : null);
    };
    getUid();

    const fetchCurrensy = async () => {
      const res = await fetch("https://www.cbr-xml-daily.ru/latest.js");
      const data = await res.json();
      setDate(data);
      const current = ["UZS", "USD", "EUR"];
      const result = {};
      for (let i = 0; i < current.length; i++) {
        result[current[i]] = data.rates[current[i]];
      }
      setCurrency(result);
    };
    fetchCurrensy();
  }, [db, uid]);
  return { info, uid, date, currency };
}

export { useInfo };
