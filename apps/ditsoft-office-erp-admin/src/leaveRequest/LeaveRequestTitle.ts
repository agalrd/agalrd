import { LeaveRequest as TLeaveRequest } from "../api/leaveRequest/LeaveRequest";

export const LEAVEREQUEST_TITLE_FIELD = "id";

export const LeaveRequestTitle = (record: TLeaveRequest): string => {
  return record.id?.toString() || String(record.id);
};
