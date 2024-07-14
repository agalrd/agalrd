import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const OccupationalDoseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Hp10" source="hp10" />
        <NumberInput label="Hp0.7" source="hp0_7" />
        <DateTimeInput label="MeasurementDate" source="measurementDate" />
        <TextInput label="EmployeeId" source="employeeId" />
      </SimpleForm>
    </Create>
  );
};
