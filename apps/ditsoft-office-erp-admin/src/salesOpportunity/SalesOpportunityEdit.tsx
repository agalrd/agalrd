import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const SalesOpportunityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
