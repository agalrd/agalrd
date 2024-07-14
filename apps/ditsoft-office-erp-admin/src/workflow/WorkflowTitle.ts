import { Workflow as TWorkflow } from "../api/workflow/Workflow";

export const WORKFLOW_TITLE_FIELD = "assignedTo";

export const WorkflowTitle = (record: TWorkflow): string => {
  return record.assignedTo?.toString() || String(record.id);
};
