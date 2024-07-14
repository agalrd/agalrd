import { Module } from "@nestjs/common";
import { SalesOpportunityModuleBase } from "./base/salesOpportunity.module.base";
import { SalesOpportunityService } from "./salesOpportunity.service";
import { SalesOpportunityController } from "./salesOpportunity.controller";
import { SalesOpportunityResolver } from "./salesOpportunity.resolver";

@Module({
  imports: [SalesOpportunityModuleBase],
  controllers: [SalesOpportunityController],
  providers: [SalesOpportunityService, SalesOpportunityResolver],
  exports: [SalesOpportunityService],
})
export class SalesOpportunityModule {}
