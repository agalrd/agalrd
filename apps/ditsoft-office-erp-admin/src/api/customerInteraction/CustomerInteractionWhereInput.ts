import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerInteractionWhereInput = {
  id?: StringFilter;
  interactionDate?: DateTimeNullableFilter;
  notes?: StringNullableFilter;
  interactionType?: "Option1";
  customerId?: StringNullableFilter;
};
