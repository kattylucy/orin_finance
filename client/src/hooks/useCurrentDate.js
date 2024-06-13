import { useState, useEffect } from "react";

const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState({
    day: "",
    month: "",
    date: 0,
  });

  useEffect(() => {
    const date = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
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

    setCurrentDate({
      day: days[date.getDay()],
      month: months[date.getMonth()],
      date: date.getDate(),
    });
  }, []);

  return currentDate;
};

export default useCurrentDate;
