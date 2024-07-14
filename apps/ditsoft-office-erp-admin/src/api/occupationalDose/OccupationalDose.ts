export type OccupationalDose = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  hp10: number | null;
  hp0_7: number | null;
  measurementDate: Date | null;
  employeeId: string | null;
};
