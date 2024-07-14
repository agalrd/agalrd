import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type LeaveRequestWhereInput = {
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  status?: "Option1";
  employee?: EmployeeWhereUniqueInput;
};
