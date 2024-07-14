import { LabTestResultCreateNestedManyWithoutTestTypesInput } from "./LabTestResultCreateNestedManyWithoutTestTypesInput";

export type TestTypeCreateInput = {
  testName?: string | null;
  description?: string | null;
  labTestResults?: LabTestResultCreateNestedManyWithoutTestTypesInput;
};
