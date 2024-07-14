import { Module } from "@nestjs/common";
import { LabTestResultModuleBase } from "./base/labTestResult.module.base";
import { LabTestResultService } from "./labTestResult.service";
import { LabTestResultController } from "./labTestResult.controller";
import { LabTestResultResolver } from "./labTestResult.resolver";

@Module({
  imports: [LabTestResultModuleBase],
  controllers: [LabTestResultController],
  providers: [LabTestResultService, LabTestResultResolver],
  exports: [LabTestResultService],
})
export class LabTestResultModule {}
