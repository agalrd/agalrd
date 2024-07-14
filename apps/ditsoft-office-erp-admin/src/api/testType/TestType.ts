import { LabTestResult } from "../labTestResult/LabTestResult";

export type TestType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  testName: string | null;
  description: string | null;
  labTestResults?: Array<LabTestResult>;
};
