import { LabTestResult as TLabTestResult } from "../api/labTestResult/LabTestResult";

export const LABTESTRESULT_TITLE_FIELD = "resultValue";

export const LabTestResultTitle = (record: TLabTestResult): string => {
  return record.resultValue?.toString() || String(record.id);
};
