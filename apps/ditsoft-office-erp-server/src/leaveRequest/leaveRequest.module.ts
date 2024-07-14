import { Module } from "@nestjs/common";
import { LeaveRequestModuleBase } from "./base/leaveRequest.module.base";
import { LeaveRequestService } from "./leaveRequest.service";
import { LeaveRequestController } from "./leaveRequest.controller";
import { LeaveRequestResolver } from "./leaveRequest.resolver";

@Module({
  imports: [LeaveRequestModuleBase],
  controllers: [LeaveRequestController],
  providers: [LeaveRequestService, LeaveRequestResolver],
  exports: [LeaveRequestService],
})
export class LeaveRequestModule {}
