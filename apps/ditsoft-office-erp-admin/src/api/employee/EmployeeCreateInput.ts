import { LeaveRequestCreateNestedManyWithoutEmployeesInput } from "./LeaveRequestCreateNestedManyWithoutEmployeesInput";
import { PayrollRecordCreateNestedManyWithoutEmployeesInput } from "./PayrollRecordCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  lastName?: string | null;
  email?: string | null;
  position?: string | null;
  firstName?: string | null;
  startDate?: Date | null;
  leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeesInput;
  payrollRecords?: PayrollRecordCreateNestedManyWithoutEmployeesInput;
};
