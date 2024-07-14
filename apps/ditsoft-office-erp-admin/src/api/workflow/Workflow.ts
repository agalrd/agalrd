import { Document } from "../document/Document";

export type Workflow = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  step: number | null;
  dueDate: Date | null;
  status?: "Option1" | null;
  assignedTo: string | null;
  document?: Document | null;
};
