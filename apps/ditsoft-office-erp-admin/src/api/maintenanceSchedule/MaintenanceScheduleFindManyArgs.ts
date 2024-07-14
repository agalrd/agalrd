import { MaintenanceScheduleWhereInput } from "./MaintenanceScheduleWhereInput";
import { MaintenanceScheduleOrderByInput } from "./MaintenanceScheduleOrderByInput";

export type MaintenanceScheduleFindManyArgs = {
  where?: MaintenanceScheduleWhereInput;
  orderBy?: Array<MaintenanceScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
