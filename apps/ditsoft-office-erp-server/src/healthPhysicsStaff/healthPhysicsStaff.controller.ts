import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HealthPhysicsStaffService } from "./healthPhysicsStaff.service";
import { HealthPhysicsStaffControllerBase } from "./base/healthPhysicsStaff.controller.base";

@swagger.ApiTags("healthPhysicsStaffs")
@common.Controller("healthPhysicsStaffs")
export class HealthPhysicsStaffController extends HealthPhysicsStaffControllerBase {
  constructor(protected readonly service: HealthPhysicsStaffService) {
    super(service);
  }
}
