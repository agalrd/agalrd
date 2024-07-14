import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DOCUMENT_TITLE_FIELD } from "./DocumentTitle";

export const DocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Content" source="content" />
        <TextField label="DocumentVersion" source="documentVersion" />
        <TextField label="WorkflowStatus" source="workflowStatus" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="CheckedOutBy" source="checkedOutBy" />
        <TextField label="CheckedOutAt" source="checkedOutAt" />
        <ReferenceManyField
          reference="Workflow"
          target="documentId"
          label="Workflows"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Step" source="step" />
            <TextField label="DueDate" source="dueDate" />
            <TextField label="Status" source="status" />
            <TextField label="AssignedTo" source="assignedTo" />
            <ReferenceField
              label="Document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Version"
          target="documentId"
          label="Versions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="VersionNumber" source="versionNumber" />
            <TextField label="Content" source="content" />
            <ReferenceField
              label="Document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
