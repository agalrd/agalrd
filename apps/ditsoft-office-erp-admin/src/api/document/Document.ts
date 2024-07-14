import { JsonValue } from "type-fest";
import { Workflow } from "../workflow/Workflow";
import { Version } from "../version/Version";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  content: string | null;
  documentVersion: number | null;
  workflowStatus?: "Option1" | null;
  metadata: JsonValue;
  checkedOutBy: string | null;
  checkedOutAt: Date | null;
  workflows?: Array<Workflow>;
  versions?: Array<Version>;
};
