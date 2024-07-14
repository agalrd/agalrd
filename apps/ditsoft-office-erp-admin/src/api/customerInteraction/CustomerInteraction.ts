export type CustomerInteraction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  interactionDate: Date | null;
  notes: string | null;
  interactionType?: "Option1" | null;
  customerId: string | null;
};
