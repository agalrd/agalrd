/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SalesOpportunityWhereUniqueInput } from "./SalesOpportunityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SalesOpportunityUpdateInput } from "./SalesOpportunityUpdateInput";

@ArgsType()
class UpdateSalesOpportunityArgs {
  @ApiProperty({
    required: true,
    type: () => SalesOpportunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalesOpportunityWhereUniqueInput)
  @Field(() => SalesOpportunityWhereUniqueInput, { nullable: false })
  where!: SalesOpportunityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SalesOpportunityUpdateInput,
  })
  @ValidateNested()
  @Type(() => SalesOpportunityUpdateInput)
  @Field(() => SalesOpportunityUpdateInput, { nullable: false })
  data!: SalesOpportunityUpdateInput;
}

export { UpdateSalesOpportunityArgs as UpdateSalesOpportunityArgs };
