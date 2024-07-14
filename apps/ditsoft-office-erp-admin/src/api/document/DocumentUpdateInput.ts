import { InputJsonValue } from "../../types";
import { WorkflowUpdateManyWithoutDocumentsInput } from "./WorkflowUpdateManyWithoutDocumentsInput";
import { VersionUpdateManyWithoutDocumentsInput } from "./VersionUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  name?: string | null;
  content?: string | null;
  documentVersion?: number | null;
  workflowStatus?: "Option1" | null;
  metadata?: InputJsonValue;
  checkedOutBy?: string | null;
  checkedOutAt?: Date | null;
  workflows?: WorkflowUpdateManyWithoutDocumentsInput;
  versions?: VersionUpdateManyWithoutDocumentsInput;
};
