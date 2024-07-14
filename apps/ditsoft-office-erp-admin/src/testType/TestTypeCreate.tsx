import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LabTestResultTitle } from "../labTestResult/LabTestResultTitle";

export const TestTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="TestName" source="testName" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="labTestResults"
          reference="LabTestResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LabTestResultTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
