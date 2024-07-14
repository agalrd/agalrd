import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MaintenanceScheduleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="ScheduledDate" source="scheduledDate" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Technician" source="technician" />
      </SimpleForm>
    </Edit>
  );
};
