import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MaintenanceLogCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="MaintenanceDate" source="maintenanceDate" />
        <TextInput label="PerformedBy" source="performedBy" />
        <TextInput label="Notes" multiline source="notes" />
      </SimpleForm>
    </Create>
  );
};
