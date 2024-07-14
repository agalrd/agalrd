import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TestTypeWhereUniqueInput } from "../testType/TestTypeWhereUniqueInput";
import { LabTechnicianWhereUniqueInput } from "../labTechnician/LabTechnicianWhereUniqueInput";

export type LabTestResultWhereInput = {
  id?: StringFilter;
  resultValue?: StringNullableFilter;
  testDate?: DateTimeNullableFilter;
  testType?: TestTypeWhereUniqueInput;
  labTechnician?: LabTechnicianWhereUniqueInput;
};
