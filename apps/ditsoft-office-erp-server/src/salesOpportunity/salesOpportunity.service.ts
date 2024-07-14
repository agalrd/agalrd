import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesOpportunityServiceBase } from "./base/salesOpportunity.service.base";

@Injectable()
export class SalesOpportunityService extends SalesOpportunityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
