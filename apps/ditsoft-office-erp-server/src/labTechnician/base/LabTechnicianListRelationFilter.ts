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
import { LabTechnicianWhereInput } from "./LabTechnicianWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LabTechnicianListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LabTechnicianWhereInput,
  })
  @ValidateNested()
  @Type(() => LabTechnicianWhereInput)
  @IsOptional()
  @Field(() => LabTechnicianWhereInput, {
    nullable: true,
  })
  every?: LabTechnicianWhereInput;

  @ApiProperty({
    required: false,
    type: () => LabTechnicianWhereInput,
  })
  @ValidateNested()
  @Type(() => LabTechnicianWhereInput)
  @IsOptional()
  @Field(() => LabTechnicianWhereInput, {
    nullable: true,
  })
  some?: LabTechnicianWhereInput;

  @ApiProperty({
    required: false,
    type: () => LabTechnicianWhereInput,
  })
  @ValidateNested()
  @Type(() => LabTechnicianWhereInput)
  @IsOptional()
  @Field(() => LabTechnicianWhereInput, {
    nullable: true,
  })
  none?: LabTechnicianWhereInput;
}
export { LabTechnicianListRelationFilter as LabTechnicianListRelationFilter };
