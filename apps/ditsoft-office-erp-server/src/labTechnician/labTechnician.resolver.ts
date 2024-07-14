import * as graphql from "@nestjs/graphql";
import { LabTechnicianResolverBase } from "./base/labTechnician.resolver.base";
import { LabTechnician } from "./base/LabTechnician";
import { LabTechnicianService } from "./labTechnician.service";

@graphql.Resolver(() => LabTechnician)
export class LabTechnicianResolver extends LabTechnicianResolverBase {
  constructor(protected readonly service: LabTechnicianService) {
    super(service);
  }
}
