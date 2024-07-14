import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WorkflowListRelationFilter } from "../workflow/WorkflowListRelationFilter";
import { VersionListRelationFilter } from "../version/VersionListRelationFilter";

export type DocumentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  content?: StringNullableFilter;
  documentVersion?: IntNullableFilter;
  workflowStatus?: "Option1";
  metadata?: JsonFilter;
  checkedOutBy?: StringNullableFilter;
  checkedOutAt?: DateTimeNullableFilter;
  workflows?: WorkflowListRelationFilter;
  versions?: VersionListRelationFilter;
};
