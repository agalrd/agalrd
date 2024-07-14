import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HealthPhysicsStaffEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Position" source="position" />
        <TextInput label="Credentials" source="credentials" />
      </SimpleForm>
    </Edit>
  );
};
