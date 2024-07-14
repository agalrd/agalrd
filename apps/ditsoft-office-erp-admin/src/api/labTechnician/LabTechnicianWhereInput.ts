import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LabTestResultListRelationFilter } from "../labTestResult/LabTestResultListRelationFilter";

export type LabTechnicianWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  position?: StringNullableFilter;
  labTestResults?: LabTestResultListRelationFilter;
};
