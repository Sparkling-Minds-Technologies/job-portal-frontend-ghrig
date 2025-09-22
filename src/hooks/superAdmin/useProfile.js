import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../../api/super-admin/user";
import useAuthStore from "../../stores/useAuthStore";

export const useGetUserProfile = ({ enabled = true } = {}) => {
  const { token } = useAuthStore();
  const navigate = useNavigate();
  return useQuery({
    queryKey: ["superAdmin-user-profile", token],
    queryFn: ({ signal }) => getUserDetails({ signal }),
    enabled: false, // Disabled for development - no auth required
    onError: (error) => {
      // Commented out for development
      // toast.error("Session expired. Please login again.");
      // navigate("/superAdmin/log-in");
    },
  });
};
