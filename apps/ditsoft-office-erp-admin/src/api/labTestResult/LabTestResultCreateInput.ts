import { TestTypeWhereUniqueInput } from "../testType/TestTypeWhereUniqueInput";
import { LabTechnicianWhereUniqueInput } from "../labTechnician/LabTechnicianWhereUniqueInput";

export type LabTestResultCreateInput = {
  resultValue?: string | null;
  testDate?: Date | null;
  testType?: TestTypeWhereUniqueInput | null;
  labTechnician?: LabTechnicianWhereUniqueInput | null;
};
