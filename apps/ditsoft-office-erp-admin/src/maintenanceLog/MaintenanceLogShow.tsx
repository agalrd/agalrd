import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MaintenanceLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="MaintenanceDate" source="maintenanceDate" />
        <TextField label="PerformedBy" source="performedBy" />
        <TextField label="Notes" source="notes" />
      </SimpleShowLayout>
    </Show>
  );
};
