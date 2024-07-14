import { SortOrder } from "../../util/SortOrder";

export type TestTypeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  testName?: SortOrder;
  description?: SortOrder;
};
