import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MaintenanceScheduleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="ScheduledDate" source="scheduledDate" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Technician" source="technician" />
      </SimpleForm>
    </Create>
  );
};
