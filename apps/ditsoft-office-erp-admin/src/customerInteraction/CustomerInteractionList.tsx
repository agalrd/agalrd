import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerInteractionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CustomerInteractions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="InteractionDate" source="interactionDate" />
        <TextField label="Notes" source="notes" />
        <TextField label="InteractionType" source="interactionType" />
        <TextField label="CustomerId" source="customerId" />
      </Datagrid>
    </List>
  );
};
