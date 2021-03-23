import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Carrera } from './carrera';

@Entity()
export class Instituto{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Carrera, carrera => carrera.instituto)
    carreras: Carrera[];

    @Column()
    nombre: string;
}