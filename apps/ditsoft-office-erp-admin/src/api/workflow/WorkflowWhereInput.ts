import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type WorkflowWhereInput = {
  id?: StringFilter;
  step?: IntNullableFilter;
  dueDate?: DateTimeNullableFilter;
  status?: "Option1";
  assignedTo?: StringNullableFilter;
  document?: DocumentWhereUniqueInput;
};
