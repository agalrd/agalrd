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

export const LabTechnicianCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Position" source="position" />
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
