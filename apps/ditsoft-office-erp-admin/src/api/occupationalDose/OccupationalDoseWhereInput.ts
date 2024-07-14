import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OccupationalDoseWhereInput = {
  id?: StringFilter;
  hp10?: FloatNullableFilter;
  hp0_7?: FloatNullableFilter;
  measurementDate?: DateTimeNullableFilter;
  employeeId?: StringNullableFilter;
};
