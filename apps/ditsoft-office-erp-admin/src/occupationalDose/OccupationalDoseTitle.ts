import { OccupationalDose as TOccupationalDose } from "../api/occupationalDose/OccupationalDose";

export const OCCUPATIONALDOSE_TITLE_FIELD = "employeeId";

export const OccupationalDoseTitle = (record: TOccupationalDose): string => {
  return record.employeeId?.toString() || String(record.id);
};
