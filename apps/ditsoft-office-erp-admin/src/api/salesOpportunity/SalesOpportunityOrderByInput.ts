import { SortOrder } from "../../util/SortOrder";

export type SalesOpportunityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  opportunityName?: SortOrder;
  potentialValue?: SortOrder;
  stage?: SortOrder;
  closeDate?: SortOrder;
};
