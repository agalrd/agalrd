import { Module } from "@nestjs/common";
import { OccupationalDoseModuleBase } from "./base/occupationalDose.module.base";
import { OccupationalDoseService } from "./occupationalDose.service";
import { OccupationalDoseController } from "./occupationalDose.controller";
import { OccupationalDoseResolver } from "./occupationalDose.resolver";

@Module({
  imports: [OccupationalDoseModuleBase],
  controllers: [OccupationalDoseController],
  providers: [OccupationalDoseService, OccupationalDoseResolver],
  exports: [OccupationalDoseService],
})
export class OccupationalDoseModule {}
