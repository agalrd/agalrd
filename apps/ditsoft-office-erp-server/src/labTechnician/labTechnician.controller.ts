import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LabTechnicianService } from "./labTechnician.service";
import { LabTechnicianControllerBase } from "./base/labTechnician.controller.base";

@swagger.ApiTags("labTechnicians")
@common.Controller("labTechnicians")
export class LabTechnicianController extends LabTechnicianControllerBase {
  constructor(protected readonly service: LabTechnicianService) {
    super(service);
  }
}
