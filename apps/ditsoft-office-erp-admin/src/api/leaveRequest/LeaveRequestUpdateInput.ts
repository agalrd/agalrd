import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type LeaveRequestUpdateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  status?: "Option1" | null;
  employee?: EmployeeWhereUniqueInput | null;
};
