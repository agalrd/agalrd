import * as graphql from "@nestjs/graphql";
import { OccupationalDoseResolverBase } from "./base/occupationalDose.resolver.base";
import { OccupationalDose } from "./base/OccupationalDose";
import { OccupationalDoseService } from "./occupationalDose.service";

@graphql.Resolver(() => OccupationalDose)
export class OccupationalDoseResolver extends OccupationalDoseResolverBase {
  constructor(protected readonly service: OccupationalDoseService) {
    super(service);
  }
}
