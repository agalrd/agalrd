import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EquipmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="SerialNumber" source="serialNumber" />
        <TextInput label="Specifications" multiline source="specifications" />
        <DateTimeInput label="PurchaseDate" source="purchaseDate" />
      </SimpleForm>
    </Edit>
  );
};
