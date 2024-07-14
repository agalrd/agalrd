import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HealthPhysicsStaffShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="LastName" source="lastName" />
        <TextField label="Position" source="position" />
        <TextField label="Credentials" source="credentials" />
      </SimpleShowLayout>
    </Show>
  );
};
