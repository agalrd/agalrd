import { LeaveRequestUpdateManyWithoutEmployeesInput } from "./LeaveRequestUpdateManyWithoutEmployeesInput";
import { PayrollRecordUpdateManyWithoutEmployeesInput } from "./PayrollRecordUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  lastName?: string | null;
  email?: string | null;
  position?: string | null;
  firstName?: string | null;
  startDate?: Date | null;
  leaveRequests?: LeaveRequestUpdateManyWithoutEmployeesInput;
  payrollRecords?: PayrollRecordUpdateManyWithoutEmployeesInput;
};
