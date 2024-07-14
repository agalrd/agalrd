import { MaintenanceLogWhereInput } from "./MaintenanceLogWhereInput";
import { MaintenanceLogOrderByInput } from "./MaintenanceLogOrderByInput";

export type MaintenanceLogFindManyArgs = {
  where?: MaintenanceLogWhereInput;
  orderBy?: Array<MaintenanceLogOrderByInput>;
  skip?: number;
  take?: number;
};
