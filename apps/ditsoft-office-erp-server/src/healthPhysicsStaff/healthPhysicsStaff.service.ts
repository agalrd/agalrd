import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HealthPhysicsStaffServiceBase } from "./base/healthPhysicsStaff.service.base";

@Injectable()
export class HealthPhysicsStaffService extends HealthPhysicsStaffServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
