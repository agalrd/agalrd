import { Module } from "@nestjs/common";
import { MaintenanceLogModuleBase } from "./base/maintenanceLog.module.base";
import { MaintenanceLogService } from "./maintenanceLog.service";
import { MaintenanceLogController } from "./maintenanceLog.controller";
import { MaintenanceLogResolver } from "./maintenanceLog.resolver";

@Module({
  imports: [MaintenanceLogModuleBase],
  controllers: [MaintenanceLogController],
  providers: [MaintenanceLogService, MaintenanceLogResolver],
  exports: [MaintenanceLogService],
})
export class MaintenanceLogModule {}
