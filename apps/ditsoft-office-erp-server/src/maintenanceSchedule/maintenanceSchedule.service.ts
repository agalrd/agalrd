import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceScheduleServiceBase } from "./base/maintenanceSchedule.service.base";

@Injectable()
export class MaintenanceScheduleService extends MaintenanceScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
