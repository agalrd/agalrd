import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PayrollRecordUpdateInput = {
  paymentDate?: Date | null;
  amount?: number | null;
  notes?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
};
