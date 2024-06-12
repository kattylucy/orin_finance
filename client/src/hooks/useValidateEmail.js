import { useState, useEffect } from "react";

export const useValidateEmail = (email) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailRegex.test(email)) {
        setErrorMessage("Invalid email address");
      } else {
        setErrorMessage("");
      }
    };

    validateEmail(email);
  }, [email]);

  return { errorMessage };
};
