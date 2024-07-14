import { MaintenanceSchedule as TMaintenanceSchedule } from "../api/maintenanceSchedule/MaintenanceSchedule";

export const MAINTENANCESCHEDULE_TITLE_FIELD = "technician";

export const MaintenanceScheduleTitle = (
  record: TMaintenanceSchedule
): string => {
  return record.technician?.toString() || String(record.id);
};
