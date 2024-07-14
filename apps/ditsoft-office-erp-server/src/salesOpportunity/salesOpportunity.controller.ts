import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesOpportunityService } from "./salesOpportunity.service";
import { SalesOpportunityControllerBase } from "./base/salesOpportunity.controller.base";

@swagger.ApiTags("salesOpportunities")
@common.Controller("salesOpportunities")
export class SalesOpportunityController extends SalesOpportunityControllerBase {
  constructor(protected readonly service: SalesOpportunityService) {
    super(service);
  }
}
