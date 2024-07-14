import * as graphql from "@nestjs/graphql";
import { MaintenanceLogResolverBase } from "./base/maintenanceLog.resolver.base";
import { MaintenanceLog } from "./base/MaintenanceLog";
import { MaintenanceLogService } from "./maintenanceLog.service";

@graphql.Resolver(() => MaintenanceLog)
export class MaintenanceLogResolver extends MaintenanceLogResolverBase {
  constructor(protected readonly service: MaintenanceLogService) {
    super(service);
  }
}
