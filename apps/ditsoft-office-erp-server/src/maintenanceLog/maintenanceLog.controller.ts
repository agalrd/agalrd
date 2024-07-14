import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaintenanceLogService } from "./maintenanceLog.service";
import { MaintenanceLogControllerBase } from "./base/maintenanceLog.controller.base";

@swagger.ApiTags("maintenanceLogs")
@common.Controller("maintenanceLogs")
export class MaintenanceLogController extends MaintenanceLogControllerBase {
  constructor(protected readonly service: MaintenanceLogService) {
    super(service);
  }
}
