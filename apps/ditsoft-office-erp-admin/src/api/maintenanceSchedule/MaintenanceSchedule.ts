export type MaintenanceSchedule = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  scheduledDate: Date | null;
  description: string | null;
  technician: string | null;
};
