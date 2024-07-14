import { LabTestResultUpdateManyWithoutTestTypesInput } from "./LabTestResultUpdateManyWithoutTestTypesInput";

export type TestTypeUpdateInput = {
  testName?: string | null;
  description?: string | null;
  labTestResults?: LabTestResultUpdateManyWithoutTestTypesInput;
};
