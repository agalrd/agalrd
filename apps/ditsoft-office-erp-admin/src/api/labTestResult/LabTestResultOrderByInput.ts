import { SortOrder } from "../../util/SortOrder";

export type LabTestResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  resultValue?: SortOrder;
  testDate?: SortOrder;
  testTypeId?: SortOrder;
  labTechnicianId?: SortOrder;
};
