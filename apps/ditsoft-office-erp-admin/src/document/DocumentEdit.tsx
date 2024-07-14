import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WorkflowTitle } from "../workflow/WorkflowTitle";
import { VersionTitle } from "../version/VersionTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Content" multiline source="content" />
        <NumberInput
          step={1}
          label="DocumentVersion"
          source="documentVersion"
        />
        <SelectInput
          source="workflowStatus"
          label="WorkflowStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <TextInput label="CheckedOutBy" source="checkedOutBy" />
        <DateTimeInput label="CheckedOutAt" source="checkedOutAt" />
        <ReferenceArrayInput
          source="workflows"
          reference="Workflow"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="versions"
          reference="Version"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VersionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
