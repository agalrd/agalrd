import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type WorkflowCreateInput = {
  step?: number | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  assignedTo?: string | null;
  document?: DocumentWhereUniqueInput | null;
};
