import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type VersionWhereInput = {
  id?: StringFilter;
  versionNumber?: IntNullableFilter;
  content?: StringNullableFilter;
  document?: DocumentWhereUniqueInput;
};
