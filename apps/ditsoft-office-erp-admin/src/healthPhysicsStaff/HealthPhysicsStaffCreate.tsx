import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HealthPhysicsStaffCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Position" source="position" />
        <TextInput label="Credentials" source="credentials" />
      </SimpleForm>
    </Create>
  );
};
