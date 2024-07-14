import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerInteractionServiceBase } from "./base/customerInteraction.service.base";

@Injectable()
export class CustomerInteractionService extends CustomerInteractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
