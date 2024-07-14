import { LabTechnician as TLabTechnician } from "../api/labTechnician/LabTechnician";

export const LABTECHNICIAN_TITLE_FIELD = "firstName";

export const LabTechnicianTitle = (record: TLabTechnician): string => {
  return record.firstName?.toString() || String(record.id);
};
