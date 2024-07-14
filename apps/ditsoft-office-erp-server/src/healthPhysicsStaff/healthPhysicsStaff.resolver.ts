import * as graphql from "@nestjs/graphql";
import { HealthPhysicsStaffResolverBase } from "./base/healthPhysicsStaff.resolver.base";
import { HealthPhysicsStaff } from "./base/HealthPhysicsStaff";
import { HealthPhysicsStaffService } from "./healthPhysicsStaff.service";

@graphql.Resolver(() => HealthPhysicsStaff)
export class HealthPhysicsStaffResolver extends HealthPhysicsStaffResolverBase {
  constructor(protected readonly service: HealthPhysicsStaffService) {
    super(service);
  }
}
