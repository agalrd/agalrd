import { MaintenanceLog as TMaintenanceLog } from "../api/maintenanceLog/MaintenanceLog";

export const MAINTENANCELOG_TITLE_FIELD = "performedBy";

export const MaintenanceLogTitle = (record: TMaintenanceLog): string => {
  return record.performedBy?.toString() || String(record.id);
};
