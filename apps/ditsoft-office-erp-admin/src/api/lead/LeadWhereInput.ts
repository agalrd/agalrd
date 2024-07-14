import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LeadWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  leadName?: StringNullableFilter;
  contactInformation?: StringNullableFilter;
  source?: StringNullableFilter;
};
