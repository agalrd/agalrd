import { TestType } from "../testType/TestType";
import { LabTechnician } from "../labTechnician/LabTechnician";

export type LabTestResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  resultValue: string | null;
  testDate: Date | null;
  testType?: TestType | null;
  labTechnician?: LabTechnician | null;
};
