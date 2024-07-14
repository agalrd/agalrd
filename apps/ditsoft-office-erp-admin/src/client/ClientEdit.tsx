import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Email" source="email" type="email" />
      </SimpleForm>
    </Edit>
  );
};
