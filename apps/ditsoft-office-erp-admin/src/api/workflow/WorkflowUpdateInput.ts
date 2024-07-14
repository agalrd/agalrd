import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type WorkflowUpdateInput = {
  step?: number | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  assignedTo?: string | null;
  document?: DocumentWhereUniqueInput | null;
};
