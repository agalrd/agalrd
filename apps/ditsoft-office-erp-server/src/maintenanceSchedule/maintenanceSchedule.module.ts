import { Module } from "@nestjs/common";
import { MaintenanceScheduleModuleBase } from "./base/maintenanceSchedule.module.base";
import { MaintenanceScheduleService } from "./maintenanceSchedule.service";
import { MaintenanceScheduleController } from "./maintenanceSchedule.controller";
import { MaintenanceScheduleResolver } from "./maintenanceSchedule.resolver";

@Module({
  imports: [MaintenanceScheduleModuleBase],
  controllers: [MaintenanceScheduleController],
  providers: [MaintenanceScheduleService, MaintenanceScheduleResolver],
  exports: [MaintenanceScheduleService],
})
export class MaintenanceScheduleModule {}
