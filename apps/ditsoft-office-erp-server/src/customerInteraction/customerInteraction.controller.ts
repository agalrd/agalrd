import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerInteractionService } from "./customerInteraction.service";
import { CustomerInteractionControllerBase } from "./base/customerInteraction.controller.base";

@swagger.ApiTags("customerInteractions")
@common.Controller("customerInteractions")
export class CustomerInteractionController extends CustomerInteractionControllerBase {
  constructor(protected readonly service: CustomerInteractionService) {
    super(service);
  }
}
