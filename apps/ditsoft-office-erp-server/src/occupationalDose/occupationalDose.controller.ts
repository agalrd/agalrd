import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OccupationalDoseService } from "./occupationalDose.service";
import { OccupationalDoseControllerBase } from "./base/occupationalDose.controller.base";

@swagger.ApiTags("occupationalDoses")
@common.Controller("occupationalDoses")
export class OccupationalDoseController extends OccupationalDoseControllerBase {
  constructor(protected readonly service: OccupationalDoseService) {
    super(service);
  }
}
