import { Module } from "@nestjs/common";
import { CustomerInteractionModuleBase } from "./base/customerInteraction.module.base";
import { CustomerInteractionService } from "./customerInteraction.service";
import { CustomerInteractionController } from "./customerInteraction.controller";
import { CustomerInteractionResolver } from "./customerInteraction.resolver";

@Module({
  imports: [CustomerInteractionModuleBase],
  controllers: [CustomerInteractionController],
  providers: [CustomerInteractionService, CustomerInteractionResolver],
  exports: [CustomerInteractionService],
})
export class CustomerInteractionModule {}
