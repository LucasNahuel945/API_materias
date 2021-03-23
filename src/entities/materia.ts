import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable,
} from 'typeorm';
import Carrera from './carrera';

@Entity()
export default class Materia {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Carrera, (carrera: Carrera) => carrera.materias)
  carrera: Carrera;

  @ManyToMany(() => Materia)
  @JoinTable()
  correlativas: Materia[];

  @Column()
  nombre: string;

  @Column()
  esAnual: boolean;

  @Column()
  cargaHoraria: number;
}
