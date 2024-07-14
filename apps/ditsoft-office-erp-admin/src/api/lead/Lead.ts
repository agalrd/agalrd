export type Lead = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  leadName: string | null;
  contactInformation: string | null;
  source: string | null;
};
