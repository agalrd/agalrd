import { SortOrder } from "../../util/SortOrder";

export type VersionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  versionNumber?: SortOrder;
  content?: SortOrder;
  documentId?: SortOrder;
};
