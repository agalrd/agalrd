import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  position?: SortOrder;
  firstName?: SortOrder;
  startDate?: SortOrder;
};
