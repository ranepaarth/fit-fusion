import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export const useLogIn = () => {

  const {loginUser} = useAuthContext()
    const [error,setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null);

  const logIn = async (userName, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${import.meta.env.VITE_API_LINK}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if(response.ok){
        //save the user to local storage
        localStorage.setItem('user',JSON.stringify(data))

        //update Auth Context
        loginUser(data)

        setIsLoading(false)
    }
  };

  return {logIn,isLoading,error}
};
