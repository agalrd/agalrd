export type SalesOpportunity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  opportunityName: string | null;
  potentialValue: number | null;
  stage?: "Option1" | null;
  closeDate: Date | null;
};
