import { SortOrder } from "../../util/SortOrder";

export type CustomerInteractionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  interactionDate?: SortOrder;
  notes?: SortOrder;
  interactionType?: SortOrder;
  customerId?: SortOrder;
};
