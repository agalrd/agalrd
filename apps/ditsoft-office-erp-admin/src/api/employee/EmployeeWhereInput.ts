import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LeaveRequestListRelationFilter } from "../leaveRequest/LeaveRequestListRelationFilter";
import { PayrollRecordListRelationFilter } from "../payrollRecord/PayrollRecordListRelationFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  position?: StringNullableFilter;
  firstName?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  leaveRequests?: LeaveRequestListRelationFilter;
  payrollRecords?: PayrollRecordListRelationFilter;
};
