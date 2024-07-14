import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SalesOpportunityWhereInput = {
  id?: StringFilter;
  opportunityName?: StringNullableFilter;
  potentialValue?: FloatNullableFilter;
  stage?: "Option1";
  closeDate?: DateTimeNullableFilter;
};
