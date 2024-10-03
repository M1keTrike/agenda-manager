export interface EventI {
  id?: string;
  titulo: string;
  descripcion?: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  hora_inicio?: string;
  hora_fin?: string;
  ubicacion?: string;
  tipo_evento: string;
  estado: 'pendiente' | 'en curso' | 'completado' | 'cancelado';
  id_agenda: string;
  createdAt?: Date;
  updatedAt?: Date;
}
