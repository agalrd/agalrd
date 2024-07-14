import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MaintenanceScheduleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ScheduledDate" source="scheduledDate" />
        <TextField label="Description" source="description" />
        <TextField label="Technician" source="technician" />
      </SimpleShowLayout>
    </Show>
  );
};
