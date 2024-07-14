import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaintenanceScheduleService } from "./maintenanceSchedule.service";
import { MaintenanceScheduleControllerBase } from "./base/maintenanceSchedule.controller.base";

@swagger.ApiTags("maintenanceSchedules")
@common.Controller("maintenanceSchedules")
export class MaintenanceScheduleController extends MaintenanceScheduleControllerBase {
  constructor(protected readonly service: MaintenanceScheduleService) {
    super(service);
  }
}
