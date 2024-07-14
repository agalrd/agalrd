import { SortOrder } from "../../util/SortOrder";

export type MaintenanceScheduleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  scheduledDate?: SortOrder;
  description?: SortOrder;
  technician?: SortOrder;
};
