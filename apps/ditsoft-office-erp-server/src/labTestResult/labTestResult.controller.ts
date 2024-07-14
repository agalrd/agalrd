import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LabTestResultService } from "./labTestResult.service";
import { LabTestResultControllerBase } from "./base/labTestResult.controller.base";

@swagger.ApiTags("labTestResults")
@common.Controller("labTestResults")
export class LabTestResultController extends LabTestResultControllerBase {
  constructor(protected readonly service: LabTestResultService) {
    super(service);
  }
}
