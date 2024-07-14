import { LabTestResultUpdateManyWithoutLabTechniciansInput } from "./LabTestResultUpdateManyWithoutLabTechniciansInput";

export type LabTechnicianUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  position?: string | null;
  labTestResults?: LabTestResultUpdateManyWithoutLabTechniciansInput;
};
