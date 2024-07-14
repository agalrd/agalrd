import { TestType as TTestType } from "../api/testType/TestType";

export const TESTTYPE_TITLE_FIELD = "testName";

export const TestTypeTitle = (record: TTestType): string => {
  return record.testName?.toString() || String(record.id);
};
