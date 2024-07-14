import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OccupationalDoseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OccupationalDoses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Hp10" source="hp10" />
        <TextField label="Hp0.7" source="hp0_7" />
        <TextField label="MeasurementDate" source="measurementDate" />
        <TextField label="EmployeeId" source="employeeId" />
      </Datagrid>
    </List>
  );
};
