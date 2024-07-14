import * as graphql from "@nestjs/graphql";
import { EquipmentResolverBase } from "./base/equipment.resolver.base";
import { Equipment } from "./base/Equipment";
import { EquipmentService } from "./equipment.service";

@graphql.Resolver(() => Equipment)
export class EquipmentResolver extends EquipmentResolverBase {
  constructor(protected readonly service: EquipmentService) {
    super(service);
  }
}
