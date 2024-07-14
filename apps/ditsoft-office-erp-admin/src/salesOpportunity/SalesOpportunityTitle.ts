import { SalesOpportunity as TSalesOpportunity } from "../api/salesOpportunity/SalesOpportunity";

export const SALESOPPORTUNITY_TITLE_FIELD = "opportunityName";

export const SalesOpportunityTitle = (record: TSalesOpportunity): string => {
  return record.opportunityName?.toString() || String(record.id);
};
