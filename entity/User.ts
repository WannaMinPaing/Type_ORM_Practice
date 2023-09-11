// import { Entity,Column,PrimaryGeneratedColumn,ChildEntity } from "typeorm";
// import { Content } from './Content';

// @ChildEntity()
// export class User extends Content{

//     /////////////////////////////////
//     //// Get From Content
//     ////  @PrimaryGeneratedColumn()
//     ////   id!:number;
//     ////
//     ////  @Column()
//     ////    name!:string;
//     //////////////////////////
//     @Column()
//     email!:string;

//     @Column()
//     phone_number!:string;
// }

////////////////////////////////////////////////////////////////////////////////////////

import { Entity,Column,PrimaryGeneratedColumn,BaseEntity } from "typeorm";
import { Content } from './Content';

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    name!:string;

    @Column()
    email!:string;

    @Column()
    password!:string;
}



