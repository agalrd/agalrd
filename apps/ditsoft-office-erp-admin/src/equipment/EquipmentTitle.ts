import { Equipment as TEquipment } from "../api/equipment/Equipment";

export const EQUIPMENT_TITLE_FIELD = "name";

export const EquipmentTitle = (record: TEquipment): string => {
  return record.name?.toString() || String(record.id);
};
