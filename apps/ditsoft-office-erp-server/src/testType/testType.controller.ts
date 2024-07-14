import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestTypeService } from "./testType.service";
import { TestTypeControllerBase } from "./base/testType.controller.base";

@swagger.ApiTags("testTypes")
@common.Controller("testTypes")
export class TestTypeController extends TestTypeControllerBase {
  constructor(protected readonly service: TestTypeService) {
    super(service);
  }
}
