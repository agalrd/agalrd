import { CustomerInteraction as TCustomerInteraction } from "../api/customerInteraction/CustomerInteraction";

export const CUSTOMERINTERACTION_TITLE_FIELD = "customerId";

export const CustomerInteractionTitle = (
  record: TCustomerInteraction
): string => {
  return record.customerId?.toString() || String(record.id);
};
