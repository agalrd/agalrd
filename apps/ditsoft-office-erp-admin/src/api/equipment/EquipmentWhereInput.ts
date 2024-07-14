import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EquipmentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  serialNumber?: StringNullableFilter;
  specifications?: StringNullableFilter;
  purchaseDate?: DateTimeNullableFilter;
};
