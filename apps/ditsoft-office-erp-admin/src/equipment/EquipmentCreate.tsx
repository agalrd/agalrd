import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EquipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="SerialNumber" source="serialNumber" />
        <TextInput label="Specifications" multiline source="specifications" />
        <DateTimeInput label="PurchaseDate" source="purchaseDate" />
      </SimpleForm>
    </Create>
  );
};
