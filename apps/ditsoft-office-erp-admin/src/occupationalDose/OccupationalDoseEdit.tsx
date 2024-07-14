import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const OccupationalDoseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Hp10" source="hp10" />
        <NumberInput label="Hp0.7" source="hp0_7" />
        <DateTimeInput label="MeasurementDate" source="measurementDate" />
        <TextInput label="EmployeeId" source="employeeId" />
      </SimpleForm>
    </Edit>
  );
};
