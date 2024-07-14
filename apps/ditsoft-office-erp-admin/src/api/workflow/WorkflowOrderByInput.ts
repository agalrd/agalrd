import { SortOrder } from "../../util/SortOrder";

export type WorkflowOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  step?: SortOrder;
  dueDate?: SortOrder;
  status?: SortOrder;
  assignedTo?: SortOrder;
  documentId?: SortOrder;
};
