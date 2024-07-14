import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LabTestResultListRelationFilter } from "../labTestResult/LabTestResultListRelationFilter";

export type TestTypeWhereInput = {
  id?: StringFilter;
  testName?: StringNullableFilter;
  description?: StringNullableFilter;
  labTestResults?: LabTestResultListRelationFilter;
};
