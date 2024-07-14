import { LabTestResult } from "../labTestResult/LabTestResult";

export type LabTechnician = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  position: string | null;
  labTestResults?: Array<LabTestResult>;
};
