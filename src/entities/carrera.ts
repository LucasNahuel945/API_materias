import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,
} from 'typeorm';
import Instituto from './instituto';
import Materia from './materia';

@Entity()
export default class Carrera {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Materia, (materia: Materia) => materia.carrera)
  materias: Materia[];

  @Column()
  nombre: string;

  @ManyToOne(() => Instituto, (instituto: Instituto) => instituto.carreras)
  instituto: Instituto;
}
