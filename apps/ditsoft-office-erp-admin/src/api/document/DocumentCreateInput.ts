import { InputJsonValue } from "../../types";
import { WorkflowCreateNestedManyWithoutDocumentsInput } from "./WorkflowCreateNestedManyWithoutDocumentsInput";
import { VersionCreateNestedManyWithoutDocumentsInput } from "./VersionCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  name?: string | null;
  content?: string | null;
  documentVersion?: number | null;
  workflowStatus?: "Option1" | null;
  metadata?: InputJsonValue;
  checkedOutBy?: string | null;
  checkedOutAt?: Date | null;
  workflows?: WorkflowCreateNestedManyWithoutDocumentsInput;
  versions?: VersionCreateNestedManyWithoutDocumentsInput;
};
