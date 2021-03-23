import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Carrera } from './carrera';

@Entity()
export class Materia{
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => Carrera, carrera => carrera.materias)
    carrera: Carrera;

    @ManyToMany(()=> Materia)
    @JoinTable()
    correlativas: Materia[];

    @Column()
    nombre: string;
    
    @Column()
    esAnual: boolean;
    
    @Column()
    cargaHoraria: number;
}