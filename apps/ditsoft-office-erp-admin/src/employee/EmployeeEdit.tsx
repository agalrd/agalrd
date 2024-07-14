import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LeaveRequestTitle } from "../leaveRequest/LeaveRequestTitle";
import { PayrollRecordTitle } from "../payrollRecord/PayrollRecordTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Position" source="position" />
        <TextInput label="FirstName" source="firstName" />
        <DateTimeInput label="StartDate" source="startDate" />
        <ReferenceArrayInput
          source="leaveRequests"
          reference="LeaveRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="payrollRecords"
          reference="PayrollRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PayrollRecordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
