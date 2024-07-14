import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="LeadName" source="leadName" />
        <TextInput
          label="ContactInformation"
          multiline
          source="contactInformation"
        />
        <TextInput label="Source" source="source" />
      </SimpleForm>
    </Create>
  );
};
