import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const WorkflowList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Workflows"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
