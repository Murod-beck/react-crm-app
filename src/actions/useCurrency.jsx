import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useCurrency() {
  const [curDate, setCurDate] = useState(null);
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const res = await fetch("https://www.cbr-xml-daily.ru/latest.js");
        const data = await res.json();
        const current = ["UZS", "USD", "EUR"];
        const result = [];
        for (let i = 0; i < current.length; i++) {
          result[current[i]] = data.rates[current[i]];
        }
        setCurDate(data.date);
        setCurrency(result);
      } catch (error) {
        toast(error.message);
      }
    };
    fetchCurrency();
  }, []);

  return { curDate, currency };
}

export { useCurrency };
