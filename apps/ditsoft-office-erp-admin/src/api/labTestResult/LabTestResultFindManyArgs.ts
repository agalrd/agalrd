import { LabTestResultWhereInput } from "./LabTestResultWhereInput";
import { LabTestResultOrderByInput } from "./LabTestResultOrderByInput";

export type LabTestResultFindManyArgs = {
  where?: LabTestResultWhereInput;
  orderBy?: Array<LabTestResultOrderByInput>;
  skip?: number;
  take?: number;
};
