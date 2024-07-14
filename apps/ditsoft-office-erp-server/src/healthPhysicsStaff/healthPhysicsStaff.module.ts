import { Module } from "@nestjs/common";
import { HealthPhysicsStaffModuleBase } from "./base/healthPhysicsStaff.module.base";
import { HealthPhysicsStaffService } from "./healthPhysicsStaff.service";
import { HealthPhysicsStaffController } from "./healthPhysicsStaff.controller";
import { HealthPhysicsStaffResolver } from "./healthPhysicsStaff.resolver";

@Module({
  imports: [HealthPhysicsStaffModuleBase],
  controllers: [HealthPhysicsStaffController],
  providers: [HealthPhysicsStaffService, HealthPhysicsStaffResolver],
  exports: [HealthPhysicsStaffService],
})
export class HealthPhysicsStaffModule {}
