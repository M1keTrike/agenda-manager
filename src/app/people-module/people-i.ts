export interface PeopleI {
  id?: string;
  nombrecompleto: string;
  email: string;
  telefono: string;
  evento_actual?: string;
  agenda_id?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
