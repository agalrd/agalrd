import { SortOrder } from "../../util/SortOrder";

export type EquipmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  serialNumber?: SortOrder;
  specifications?: SortOrder;
  purchaseDate?: SortOrder;
};
