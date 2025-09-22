import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/super-admin/auth";
import { toast } from "sonner";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser, setToken, setIsAuthenticated, setRefetchProfile } =
    useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: async (data, variables) => {
      toast.success(data.message);
      setToken(data.data.token, variables.rememberme);
      setUser(data.data); // Store user data from API response
      setIsAuthenticated(true);
      setRefetchProfile(true);
      navigate("/super-admin/dashboard");
    },
    onError: (error) => {
      toast.error(error.response.data.message, {});
    },
  });
};
