export interface AgentI {
  id?: string;
  tipo_agenda: string;
  nombre: string;
  persona_id: string;
  fecha_creacion?: Date;
  fecha_modificacion?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
