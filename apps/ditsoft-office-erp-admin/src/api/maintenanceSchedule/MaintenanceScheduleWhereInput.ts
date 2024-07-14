import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MaintenanceScheduleWhereInput = {
  id?: StringFilter;
  scheduledDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  technician?: StringNullableFilter;
};
