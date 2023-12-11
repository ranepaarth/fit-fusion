import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const { logoutUser } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");
    logoutUser();
  };

  return {logout}
};
