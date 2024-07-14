import { SortOrder } from "../../util/SortOrder";

export type PayrollRecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  paymentDate?: SortOrder;
  amount?: SortOrder;
  notes?: SortOrder;
  employeeId?: SortOrder;
};
