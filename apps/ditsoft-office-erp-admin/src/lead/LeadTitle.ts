import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "leadName";

export const LeadTitle = (record: TLead): string => {
  return record.leadName?.toString() || String(record.id);
};
