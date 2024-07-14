import { EquipmentWhereInput } from "./EquipmentWhereInput";
import { EquipmentOrderByInput } from "./EquipmentOrderByInput";

export type EquipmentFindManyArgs = {
  where?: EquipmentWhereInput;
  orderBy?: Array<EquipmentOrderByInput>;
  skip?: number;
  take?: number;
};
