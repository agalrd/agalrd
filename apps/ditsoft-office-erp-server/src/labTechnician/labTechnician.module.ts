import { Module } from "@nestjs/common";
import { LabTechnicianModuleBase } from "./base/labTechnician.module.base";
import { LabTechnicianService } from "./labTechnician.service";
import { LabTechnicianController } from "./labTechnician.controller";
import { LabTechnicianResolver } from "./labTechnician.resolver";

@Module({
  imports: [LabTechnicianModuleBase],
  controllers: [LabTechnicianController],
  providers: [LabTechnicianService, LabTechnicianResolver],
  exports: [LabTechnicianService],
})
export class LabTechnicianModule {}
