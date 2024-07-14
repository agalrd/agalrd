import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeaveRequestServiceBase } from "./base/leaveRequest.service.base";

@Injectable()
export class LeaveRequestService extends LeaveRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
