import { LabTestResultCreateNestedManyWithoutLabTechniciansInput } from "./LabTestResultCreateNestedManyWithoutLabTechniciansInput";

export type LabTechnicianCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  position?: string | null;
  labTestResults?: LabTestResultCreateNestedManyWithoutLabTechniciansInput;
};
