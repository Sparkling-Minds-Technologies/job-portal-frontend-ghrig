import { useQuery } from "@tanstack/react-query";
import {
  getAllCompanies,
  getCompanyById,
} from "../../api/super-admin/database";

export const useGetAllCompanies = (params = {}) => {
  return useQuery({
    queryKey: ["superAdmin-companies", params],
    queryFn: ({ signal }) => getAllCompanies({ signal, ...params }),
    keepPreviousData: true,
    retry: (failureCount, error) => {
      // Don't retry on 401 errors (permission denied)
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      // Use default retry logic for other errors
      return failureCount < 3;
    },
  });
};

export const useGetCompanyDetails = (id, { enabled = true } = {}) => {
  return useQuery({
    queryKey: ["superAdmin-company", id],
    queryFn: ({ signal }) => getCompanyById({ signal, id }),
    enabled: enabled && !!id,
    retry: (failureCount, error) => {
      // Don't retry on 401 errors (permission denied)
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      // Use default retry logic for other errors
      return failureCount < 3;
    },
  });
};
