import {
  Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import Carrera from './carrera';

@Entity()
export default class Instituto {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Carrera, (carrera: Carrera) => carrera.instituto)
    carreras: Carrera[];

    @Column()
    nombre: string;
}
