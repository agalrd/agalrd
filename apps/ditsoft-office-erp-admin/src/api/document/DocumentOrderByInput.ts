import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  content?: SortOrder;
  documentVersion?: SortOrder;
  workflowStatus?: SortOrder;
  metadata?: SortOrder;
  checkedOutBy?: SortOrder;
  checkedOutAt?: SortOrder;
};
