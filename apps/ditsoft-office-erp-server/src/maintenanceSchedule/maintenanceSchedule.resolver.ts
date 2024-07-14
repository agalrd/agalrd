import * as graphql from "@nestjs/graphql";
import { MaintenanceScheduleResolverBase } from "./base/maintenanceSchedule.resolver.base";
import { MaintenanceSchedule } from "./base/MaintenanceSchedule";
import { MaintenanceScheduleService } from "./maintenanceSchedule.service";

@graphql.Resolver(() => MaintenanceSchedule)
export class MaintenanceScheduleResolver extends MaintenanceScheduleResolverBase {
  constructor(protected readonly service: MaintenanceScheduleService) {
    super(service);
  }
}
