import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CustomerInteractionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="InteractionDate" source="interactionDate" />
        <TextInput label="Notes" multiline source="notes" />
        <SelectInput
          source="interactionType"
          label="InteractionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="CustomerId" source="customerId" />
      </SimpleForm>
    </Create>
  );
};
