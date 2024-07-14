import * as graphql from "@nestjs/graphql";
import { CustomerInteractionResolverBase } from "./base/customerInteraction.resolver.base";
import { CustomerInteraction } from "./base/CustomerInteraction";
import { CustomerInteractionService } from "./customerInteraction.service";

@graphql.Resolver(() => CustomerInteraction)
export class CustomerInteractionResolver extends CustomerInteractionResolverBase {
  constructor(protected readonly service: CustomerInteractionService) {
    super(service);
  }
}
