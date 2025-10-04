import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logOut = () => {
    queryClient.clear();

    // Simple localStorage logout
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");

    navigate("/super-admin/log-in");
  };

  return logOut;
};
