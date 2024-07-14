import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CustomerInteractionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
