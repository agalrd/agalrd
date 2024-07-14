/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { LeaveRequestCreateNestedManyWithoutEmployeesInput } from "./LeaveRequestCreateNestedManyWithoutEmployeesInput";
import { PayrollRecordCreateNestedManyWithoutEmployeesInput } from "./PayrollRecordCreateNestedManyWithoutEmployeesInput";

@InputType()
class EmployeeCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  position?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => LeaveRequestCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => LeaveRequestCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => LeaveRequestCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeesInput;

  @ApiProperty({
    required: false,
    type: () => PayrollRecordCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => PayrollRecordCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => PayrollRecordCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  payrollRecords?: PayrollRecordCreateNestedManyWithoutEmployeesInput;
}

export { EmployeeCreateInput as EmployeeCreateInput };
