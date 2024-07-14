import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PayrollRecordCreateInput = {
  paymentDate?: Date | null;
  amount?: number | null;
  notes?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
};
