import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TESTTYPE_TITLE_FIELD } from "./TestTypeTitle";
import { LABTECHNICIAN_TITLE_FIELD } from "../labTechnician/LabTechnicianTitle";

export const TestTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="TestName" source="testName" />
        <TextField label="Description" source="description" />
        <ReferenceManyField
          reference="LabTestResult"
          target="testTypeId"
          label="LabTestResults"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="ResultValue" source="resultValue" />
            <TextField label="TestDate" source="testDate" />
            <ReferenceField
              label="TestType"
              source="testtype.id"
              reference="TestType"
            >
              <TextField source={TESTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="LabTechnician"
              source="labtechnician.id"
              reference="LabTechnician"
            >
              <TextField source={LABTECHNICIAN_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
