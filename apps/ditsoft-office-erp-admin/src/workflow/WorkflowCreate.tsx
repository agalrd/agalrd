import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";

export const WorkflowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Step" source="step" />
        <DateTimeInput label="DueDate" source="dueDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="AssignedTo" source="assignedTo" />
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="Document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
