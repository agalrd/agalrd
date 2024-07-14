import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MaintenanceLogWhereInput = {
  id?: StringFilter;
  maintenanceDate?: DateTimeNullableFilter;
  performedBy?: StringNullableFilter;
  notes?: StringNullableFilter;
};
