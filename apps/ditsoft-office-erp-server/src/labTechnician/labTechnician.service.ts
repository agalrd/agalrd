import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabTechnicianServiceBase } from "./base/labTechnician.service.base";

@Injectable()
export class LabTechnicianService extends LabTechnicianServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
