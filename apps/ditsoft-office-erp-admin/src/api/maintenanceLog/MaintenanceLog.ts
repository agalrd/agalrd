export type MaintenanceLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  maintenanceDate: Date | null;
  performedBy: string | null;
  notes: string | null;
};
