import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MaintenanceLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="MaintenanceDate" source="maintenanceDate" />
        <TextInput label="PerformedBy" source="performedBy" />
        <TextInput label="Notes" multiline source="notes" />
      </SimpleForm>
    </Edit>
  );
};
