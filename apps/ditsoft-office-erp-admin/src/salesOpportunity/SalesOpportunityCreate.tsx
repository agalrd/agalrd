import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const SalesOpportunityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="OpportunityName" source="opportunityName" />
        <NumberInput label="PotentialValue" source="potentialValue" />
        <SelectInput
          source="stage"
          label="Stage"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="CloseDate" source="closeDate" />
      </SimpleForm>
    </Create>
  );
};
