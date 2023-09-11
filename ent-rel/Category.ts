import { Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany, ManyToOne,ManyToMany } from "typeorm";
import {Question} from './Question';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    name!: string; 


    @ManyToMany(() => Question,question=>question.categories)
    question!:Question;
}

// Category has many question


