import { SortOrder } from "../../util/SortOrder";

export type LeaveRequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  status?: SortOrder;
  employeeId?: SortOrder;
};
