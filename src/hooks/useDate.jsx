import { useState } from "react";

function useDate() {
  const [dates, setDates] = useState("");

  const date = () => {
    const now = new Date();
    const today = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${today}-${months[month]}. ${year}. ${now.toLocaleTimeString()}`;
  };
  setInterval(() => {
    setDates(date);
  }, 1000);
  return { dates };
}

export { useDate };
