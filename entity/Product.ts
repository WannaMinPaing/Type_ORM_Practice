import { Entity,Column,PrimaryGeneratedColumn,ChildEntity } from "typeorm";
import { Content } from './Content';

@ChildEntity()
export class Product extends Content{

    ////////////////////////////////
    //// Get From Content
    ////  @PrimaryGeneratedColumn()
    ////   id!:number;
    ////
    ////  @Column()
    ////   name!:string;
    ////////////////////////////////


    @Column()
    price!:string;

    @Column()
    limit!:string;
}