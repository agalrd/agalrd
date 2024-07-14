import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OccupationalDoseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Hp10" source="hp10" />
        <TextField label="Hp0.7" source="hp0_7" />
        <TextField label="MeasurementDate" source="measurementDate" />
        <TextField label="EmployeeId" source="employeeId" />
      </SimpleShowLayout>
    </Show>
  );
};
