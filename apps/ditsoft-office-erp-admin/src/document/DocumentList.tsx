import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocumentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Documents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
