import { SortOrder } from "../../util/SortOrder";

export type MaintenanceLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  maintenanceDate?: SortOrder;
  performedBy?: SortOrder;
  notes?: SortOrder;
};
