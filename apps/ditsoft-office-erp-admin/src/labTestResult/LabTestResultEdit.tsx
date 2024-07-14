import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TestTypeTitle } from "../testType/TestTypeTitle";
import { LabTechnicianTitle } from "../labTechnician/LabTechnicianTitle";

export const LabTestResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ResultValue" source="resultValue" />
        <DateTimeInput label="TestDate" source="testDate" />
        <ReferenceInput
          source="testType.id"
          reference="TestType"
          label="TestType"
        >
          <SelectInput optionText={TestTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="labTechnician.id"
          reference="LabTechnician"
          label="LabTechnician"
        >
          <SelectInput optionText={LabTechnicianTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
