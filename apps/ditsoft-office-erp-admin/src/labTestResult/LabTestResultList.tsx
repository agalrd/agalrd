import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TESTTYPE_TITLE_FIELD } from "../testType/TestTypeTitle";
import { LABTECHNICIAN_TITLE_FIELD } from "../labTechnician/LabTechnicianTitle";

export const LabTestResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LabTestResults"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
