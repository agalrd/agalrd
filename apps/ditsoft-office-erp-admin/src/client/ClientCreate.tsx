import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Email" source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};
