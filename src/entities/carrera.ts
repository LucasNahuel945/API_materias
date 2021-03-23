import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Instituto } from './instituto';
import { Materia } from './materia';

@Entity()
export class Carrera{
    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToMany(() => Materia, materia => materia.carrera)
    materias: Materia[];

    @Column()
    nombre: string;

    @ManyToOne(() => Instituto, instituto => instituto.carreras)
    instituto: Instituto;
}
