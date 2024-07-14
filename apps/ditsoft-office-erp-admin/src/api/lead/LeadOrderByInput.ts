import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  leadName?: SortOrder;
  contactInformation?: SortOrder;
  source?: SortOrder;
};
