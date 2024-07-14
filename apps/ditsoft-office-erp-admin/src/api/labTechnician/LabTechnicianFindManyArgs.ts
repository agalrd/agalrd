import { LabTechnicianWhereInput } from "./LabTechnicianWhereInput";
import { LabTechnicianOrderByInput } from "./LabTechnicianOrderByInput";

export type LabTechnicianFindManyArgs = {
  where?: LabTechnicianWhereInput;
  orderBy?: Array<LabTechnicianOrderByInput>;
  skip?: number;
  take?: number;
};
