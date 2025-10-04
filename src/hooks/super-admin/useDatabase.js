import { useQuery } from "@tanstack/react-query";
import {
  getAllCompanies,
  getAllTrainers,
  getAllRecruiters,
  getAllCandidates,
} from "../../api/super-admin/database";

export const useGetDatabaseCompanies = (params = {}) => {
  return useQuery({
    queryKey: ["database-companies", params],
    queryFn: ({ signal }) => getAllCompanies({ signal, ...params }),
    keepPreviousData: true,
    retry: (failureCount, error) => {
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useGetDatabaseTrainers = (params = {}) => {
  return useQuery({
    queryKey: ["database-trainers", params],
    queryFn: ({ signal }) => getAllTrainers({ signal, ...params }),
    keepPreviousData: true,
    retry: (failureCount, error) => {
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useGetDatabaseRecruiters = (params = {}) => {
  return useQuery({
    queryKey: ["database-recruiters", params],
    queryFn: ({ signal }) => getAllRecruiters({ signal, ...params }),
    keepPreviousData: true,
    retry: (failureCount, error) => {
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useGetDatabaseCandidates = (params = {}) => {
  return useQuery({
    queryKey: ["database-candidates", params],
    queryFn: ({ signal }) => getAllCandidates({ signal, ...params }),
    keepPreviousData: true,
    retry: (failureCount, error) => {
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};
