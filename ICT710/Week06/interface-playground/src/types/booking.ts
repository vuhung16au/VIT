export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  nextAvailable: string;
  rating: number;
};

export type BookingState = {
  doctorId: string;
  date: string;
  confirmed: boolean;
};
