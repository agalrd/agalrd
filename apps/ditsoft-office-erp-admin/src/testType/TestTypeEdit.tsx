import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LabTestResultTitle } from "../labTestResult/LabTestResultTitle";

export const TestTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
