import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OccupationalDoseServiceBase } from "./base/occupationalDose.service.base";

@Injectable()
export class OccupationalDoseService extends OccupationalDoseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
