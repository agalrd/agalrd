import { Module } from "@nestjs/common";
import { EquipmentModuleBase } from "./base/equipment.module.base";
import { EquipmentService } from "./equipment.service";
import { EquipmentController } from "./equipment.controller";
import { EquipmentResolver } from "./equipment.resolver";

@Module({
  imports: [EquipmentModuleBase],
  controllers: [EquipmentController],
  providers: [EquipmentService, EquipmentResolver],
  exports: [EquipmentService],
})
export class EquipmentModule {}
