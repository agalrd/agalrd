import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PayrollRecordWhereInput = {
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
  amount?: FloatNullableFilter;
  notes?: StringNullableFilter;
  employee?: EmployeeWhereUniqueInput;
};
