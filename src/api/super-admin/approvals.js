import api from "../../lib/axios";

// Review approval (approve, reject, hold)
export const reviewApproval = (approvalId, data) =>
  api.patch(`/api/v1/admin/approvals/${approvalId}/review`, data);

// Get approvals list by type
export const getApprovalsList = (type, params = {}) =>
  api.get(`/api/v1/admin/approvals/list`, { params: { type, ...params } });

// Get approval details by ID (unified endpoint for all types)
export const getApprovalDetails = (approvalId) =>
  api.get(`/api/v1/admin/approvals/${approvalId}`);
