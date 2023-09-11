import { Entity,Column,PrimaryGeneratedColumn,ChildEntity } from "typeorm";
import { Content } from './Content';

@ChildEntity()
export class Shop extends Content{

    //////////////////////////////
    //// Get From Content
    ////  @PrimaryGeneratedColumn()
    ////   id!:number;
    ////
    ////  @Column()
    ////   name!:string;
    //////////////////////////////


    @Column()
    address!:string;

    @Column()
    phone!:string;
}