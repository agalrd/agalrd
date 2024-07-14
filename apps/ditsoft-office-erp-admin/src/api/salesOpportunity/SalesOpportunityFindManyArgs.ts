import { SalesOpportunityWhereInput } from "./SalesOpportunityWhereInput";
import { SalesOpportunityOrderByInput } from "./SalesOpportunityOrderByInput";

export type SalesOpportunityFindManyArgs = {
  where?: SalesOpportunityWhereInput;
  orderBy?: Array<SalesOpportunityOrderByInput>;
  skip?: number;
  take?: number;
};
