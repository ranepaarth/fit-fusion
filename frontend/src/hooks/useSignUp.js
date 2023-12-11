import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export const useSignUp = () => {
  const { loginUser } = useAuthContext();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  const signUp = async (firstName, userName, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, userName, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
      setSuccess(false);
    }

    if (response.ok) {
      setError(null);
      setSuccess(true);
      setIsLoading(false);
    }
  };

  return { signUp, isLoading, error, success };
};
