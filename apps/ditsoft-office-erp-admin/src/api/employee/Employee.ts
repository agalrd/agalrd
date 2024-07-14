import { LeaveRequest } from "../leaveRequest/LeaveRequest";
import { PayrollRecord } from "../payrollRecord/PayrollRecord";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  email: string | null;
  position: string | null;
  firstName: string | null;
  startDate: Date | null;
  leaveRequests?: Array<LeaveRequest>;
  payrollRecords?: Array<PayrollRecord>;
};
