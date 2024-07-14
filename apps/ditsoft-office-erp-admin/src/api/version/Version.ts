import { Document } from "../document/Document";

export type Version = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  versionNumber: number | null;
  content: string | null;
  document?: Document | null;
};
