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

export const LabTechnicianEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
