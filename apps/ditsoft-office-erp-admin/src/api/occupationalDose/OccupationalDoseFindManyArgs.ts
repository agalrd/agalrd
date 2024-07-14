import { OccupationalDoseWhereInput } from "./OccupationalDoseWhereInput";
import { OccupationalDoseOrderByInput } from "./OccupationalDoseOrderByInput";

export type OccupationalDoseFindManyArgs = {
  where?: OccupationalDoseWhereInput;
  orderBy?: Array<OccupationalDoseOrderByInput>;
  skip?: number;
  take?: number;
};
