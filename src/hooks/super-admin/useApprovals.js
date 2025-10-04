import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getApprovalsList,
  getApprovalDetails,
  reviewApproval,
} from "../../api/super-admin/approvals";

export const useGetApprovalsCompanies = (params = {}) => {
  return useQuery({
    queryKey: ["approvals-companies", params],
    queryFn: ({ signal }) =>
      getApprovalsList("corporate", { signal, ...params }),
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

export const useGetApprovalsTrainers = (params = {}) => {
  return useQuery({
    queryKey: ["approvals-trainers", params],
    queryFn: ({ signal }) => getApprovalsList("trainer", { signal, ...params }),
    keepPreviousData: true,
    retry: (failureCount, error) => {
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useGetApprovalsRecruiters = (params = {}) => {
  return useQuery({
    queryKey: ["approvals-recruiters", params],
    queryFn: ({ signal }) =>
      getApprovalsList("recruiter", { signal, ...params }),
    keepPreviousData: true,
    retry: (failureCount, error) => {
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useGetApprovalsJobs = (params = {}) => {
  return useQuery({
    queryKey: ["approvals-jobs", params],
    queryFn: ({ signal }) => getApprovalsList("job", { signal, ...params }),
    keepPreviousData: true,
    retry: (failureCount, error) => {
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useGetApprovalsTrainings = (params = {}) => {
  return useQuery({
    queryKey: ["approvals-trainings", params],
    queryFn: ({ signal }) =>
      getApprovalsList("training", { signal, ...params }),
    keepPreviousData: true,
    retry: (failureCount, error) => {
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useGetApprovalsJobsAndTrainings = (params = {}) => {
  return useQuery({
    queryKey: ["approvals-jobs-trainings", params],
    queryFn: ({ signal }) =>
      getApprovalsList("job-training", { signal, ...params }),
    keepPreviousData: true,
    retry: (failureCount, error) => {
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useGetApprovalDetails = (approvalId, { enabled = true } = {}) => {
  return useQuery({
    queryKey: ["approval-details", approvalId],
    queryFn: ({ signal }) => getApprovalDetails(approvalId, { signal }),
    enabled: enabled && !!approvalId,
    retry: (failureCount, error) => {
      if (error?.response?.status === 401 || error?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

// Hook for approval actions (approve, reject, hold)
export const useApprovals = () => {
  const queryClient = useQueryClient();

  const reviewApprovalMutation = useMutation({
    mutationFn: ({ approvalId, action, reason }) =>
      reviewApproval(approvalId, { action, reason }),
    onSuccess: () => {
      // Invalidate relevant queries to refresh data
      queryClient.invalidateQueries({ queryKey: ["approvals-"] });
      queryClient.invalidateQueries({ queryKey: ["approval-details"] });
    },
  });

  const approveApplication = async (approvalId) => {
    return reviewApprovalMutation.mutateAsync({
      approvalId,
      action: "approved",
    });
  };

  const rejectApplication = async (approvalId, reason = "") => {
    return reviewApprovalMutation.mutateAsync({
      approvalId,
      action: "rejected",
      reason,
    });
  };

  const holdApplication = async (approvalId, reason = "") => {
    return reviewApprovalMutation.mutateAsync({
      approvalId,
      action: "hold",
      reason,
    });
  };

  return {
    isLoading: reviewApprovalMutation.isPending,
    approveApplication,
    rejectApplication,
    holdApplication,
    error: reviewApprovalMutation.error,
  };
};
