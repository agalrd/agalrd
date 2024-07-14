import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type LeaveRequestCreateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  status?: "Option1" | null;
  employee?: EmployeeWhereUniqueInput | null;
};
