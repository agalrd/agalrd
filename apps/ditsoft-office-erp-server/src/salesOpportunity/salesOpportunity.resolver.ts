import * as graphql from "@nestjs/graphql";
import { SalesOpportunityResolverBase } from "./base/salesOpportunity.resolver.base";
import { SalesOpportunity } from "./base/SalesOpportunity";
import { SalesOpportunityService } from "./salesOpportunity.service";

@graphql.Resolver(() => SalesOpportunity)
export class SalesOpportunityResolver extends SalesOpportunityResolverBase {
  constructor(protected readonly service: SalesOpportunityService) {
    super(service);
  }
}
