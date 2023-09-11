import { EntityManager, getRepository } from 'typeorm';
import {Request,Response} from 'express';
// For single model
// import {User} from '../entity/User';
import { Between, Equal, getManager,LessThan,LessThanOrEqual,Like,Not,In, IsNull,getCustomRepository } from 'typeorm';
import { skip } from 'node:test';
// For getCustomRepository 
import { UserRepo } from '../repo/UserRepository';
// For relation model 
import {User} from '../ent-rel/User';
import { Profile } from '../ent-rel/Profile';
import { Employee } from '../ent-rel/Employee';
import { Photo } from '../ent-rel/Photo';
// For many to many relationship
import { Category } from '../ent-rel/Category';
import { Question } from '../ent-rel/Question';


//----------------------- For getManager Function------------------------/

// const homeDetail = async (req:Request,resp:Response) => {

//     const entityManager = getManager();

    //---------------- Insert --------------/
    // let data = await entityManager.insert(User,{
    //     name : 'demo',
    //     email : 'demo@gmail.com',
    //     password : '123456789'
    // })


//     //---------------Save--------------------/
//     // let user = new User();
//     // user.name   = 'dummy';
//     // user.email  = 'dummy@gmail.com';
//     // user.password  = '111111111';
//     // let data    = await entityManager.save(user);


//     //---------------Update------------------/
//     // let data = await entityManager.update(User,2,{email:"mytest@gmail.com"})


//     //---------------Delete------------------/
//     // let data = await entityManager.delete(User,2)

//     //---------------Find All ---------------/
//     // let data = await entityManager.find(User);

//     //----------------Find By Id --------------/
//     // let data = await entityManager.findOne(User,{ where: { id: 1 } });
//     // let data = await entityManager.findOne(User,{ where: { email: 'dummy@gmail.com' } });

//     //----------------Truncate (Delete All Recordes) ------------------/
//     let data = await entityManager.clear(User);

//     resp.json({
//         test : 'ok',
//         data : data
//     })
// }



//----------------------- For getRepository Function------------------------/

// const homeDetail = async (req:Request,resp:Response) => {

//     const repository = getRepository(User);

//     //---------------- Insert --------------/
//     // let data = await repository.insert({
//     //     name : 'demo2',
//     //     email : 'demo2@gmail.com',
//     //     password : '222222222'
//     // })


//     //---------------Save--------------------/
//     // let user = new User();
//     // user.name   = 'dummy';
//     // user.email  = 'dummy@gmail.com';
//     // user.password  = '111111111';
//     // let data    = await repository.save(user);


//     //---------------Update------------------/
//     // let data = await repository.update(2,{email:"mytest@gmail.com"})


//     //---------------Delete------------------/
//     // let data = await repository.delete(2)

//     //---------------Find with Filter  ---------------/
//     // let data = await repository.find({ where: { id: 1 } });
//     // let data = await repository.find({ where: { name : 'demo',id: 1 } }); // no exit return array []
//     // let data = await repository.findOne({ where: { email: 'demo@gmail.com11',id: 1 } }); // no exit return null

//     //----------------Truncate (Delete All Recordes) ------------------/
//     // let data = await repository.clear();

//     //----------------Select & Get Specific Colunm  -------------------------------------------/
//     // let data = await repository.find({
//     //     select:['name','id']
//     // })

//     //----------------Where (no exit return array)  -------------------------------------------/
//     // let data = await repository.find({
//     //     where : {
//     //         name : 'demo',
//     //         email : 'demo@gmail.com'
//     //     }
//     // })

//     //---------------- OR  -------------------------------------------/
//     // let data = await repository.find({
//     //     where : [
//     //                 {
//     //                     name : 'demo',
//     //                     email : 'demo@gmail.com'
//     //                 },
//     //                 {
//     //                     name : 'demo3',
//     //                     email : 'demo2@gmail.com'
//     //                 }
//     //             ]
//     // })

//     //---------------- Order , Skip , Take  -------------------------------------------/
//     // let data = await repository.find({
//     //     order : {
//     //                 // id:"DESC"
//     //                 name : "ASC"
//     //             },
//     //             skip : 1,
//     //             take : 3,
//     // })

//     //---------------- Not , LessThan  -------------------------------------------/
//     // let data = await repository.find({
//     //     where: {
//     //         // name: Not("demo2")
//     //         // name : Like('%de%')
//     //         // name : In(["demo",'demo2'])
//     //         // name : IsNull()
//     //         // id : LessThan(4)
//     //         // id : LessThanOrEqual(2)
//     //         // id : Equal(2)
//     //         // id : Between(2,4)
//     //     }
//     // })



    // //----------------------- For getCustomRepository Function------------------------/

    // const homeDetail = async (req:Request,resp:Response) => {

    //     const UserRepository = getCustomRepository(UserRepo);
        
    //     let data = await UserRepository.customSave("myData3",'mydata3@gmail.com','12345');

    //     // let data = await UserRepository.findByNameAndEmail("myData",'mydata@gmail.com');

    //     resp.json({
    //         test : 'ok',
    //         data
    //     })
    // }



    // // ------------------------------ One  to One Relationship ----------------------------/
    // const homeDetail = async (req:Request,resp:Response) => {

    //     const entityManager = getManager();

    //     const profile = new Profile();
    //     profile.gender = "Male";
    //     profile.photo = 'abc.jpg';

    //     let data = await entityManager.save(profile);

    //     const user = new User();
    //     // user.name = "Mr John";
    //     user.profile = profile;
    //     await entityManager.save(user);


    //     resp.json({
    //         test : "ok11"
    //     })
    // }

    

    // ------------------------------ One  to Many Relationship ----------------------------/
    //const homeDetail = async (req:Request,resp:Response) => {

        //const entityManager = getManager();

        //=============   Way 1 ======================//

        // const employee = new Employee();
        // employee.name = "Test";
        // await entityManager.save(employee)

        // const p1 = new Photo();
        // p1.url  = 'demo1.jpg';
        // p1.employee = employee;
        // await entityManager.save(p1);

        // const p2 = new Photo();
        // p2.url  = 'demo2.jpg';
        // p2.employee = employee;
        // await entityManager.save(p2);
        
        //=============   Way 2 ======================//

        // const p1 = new Photo();
        // p1.url = "demo3.jpg";
        // await entityManager.save(p1);

        // const p2 = new Photo();
        // p2.url  = 'demo4.jpg';
        // await entityManager.save(p2);

        // const employee = new Employee();
        // employee.name = "Way2";
        // employee.photos = [p1,p2];
        // await entityManager.save(employee)


        // resp.json({
        //     test : "way 2"
        // })
    //}


        // ------------------------------ Many  to Many Relationship ----------------------------/
        // const homeDetail = async (req:Request,resp:Response) => {
        //     const entityManager = getManager();

        //     const c1 = new Category();
        //     c1.name = "Sport";
        //     await entityManager.save(c1);

        //     const c2 = new Category();
        //     c2.name = "Movie";
        //     await entityManager.save(c2);

        //     const q1 = new Question();
        //     q1.text = "My First Question";
        //     q1.title = "First Title";
        //     q1.categories = [c1,c2];
        //     await entityManager.save(q1);

        //     resp.json({
        //         test : "Many To Many"
        //     })
        // }

        //------------------------------------- get data from one to one relation ship ----------------//
        // const homeDetail = async (req:Request,resp:Response) => {
        //     const entityManager = getManager();
            
        //     //---------------- Way one---------------------------//
        //     // let repo = getRepository(User);
        //     // let data = await repo.find({relations:["profile"]});

        //     //-------------- Or Way Two ---------------------------------//
        //     // let repo = getRepository(Profile);
        //     // let data = await repo.find({relations:["user"]});

        //     //--------------- Or Join & Same Result Way Two  ---------------------------------//
        //     // let data = await entityManager
        //     // .getRepository(Profile)
        //     // .createQueryBuilder("profile")
        //     // .leftJoinAndSelect("profile.user","user")
        //     // .getMany();

        //     //--------------- Or Join & Same Result Way One  ---------------------------------//
        //     let data = await entityManager
        //     .getRepository(User)
        //     .createQueryBuilder("user")
        //     .leftJoinAndSelect("user.profile","profile")
        //     .getMany();

            
        //     resp.json({
        //         test : "Many To Many",
        //         data
        //     })
        // }

        //------------------------------------- get data from one to many relation ship ----------------//
        // const homeDetail = async (req:Request,resp:Response) => {
        //     const entityManager = getManager();

        //     //---------------- Way one---------------------------//
        //     // let repo = getRepository(Employee);
        //     // let data = await repo.find({relations:["photos"]});

        //     //---------------- Way Two ---------------------------//
        //     // let repo = getRepository(Photo);
        //     // let data = await repo.find({relations:["employee"]});

        //     //--------------- Or Join & Same Result Way One  ---------------------------------//
        //     // let data = await entityManager
        //     // .getRepository(Employee)
        //     // .createQueryBuilder("employee")
        //     // .leftJoinAndSelect("employee.photos","photo")
        //     // .getMany();

        //     //--------------- Or Join & Same Result Way Two  ---------------------------------//
        //     let data = await entityManager
        //     .getRepository(Photo)
        //     .createQueryBuilder("photo")
        //     .leftJoinAndSelect("photo.employee","employee")
        //     .getMany();

        //     resp.json({
        //                 test : "Many To Many",
        //                 data
        //             })
        // }


        //------------------------------------- get data from many to many relation ship ----------------//
        // const homeDetail = async (req:Request,resp:Response) => {
        //     const entityManager = getManager();

        //     let quesRepp = entityManager.getRepository(Question)
        //     let data = await quesRepp.find({relations:["categories"]})

        //     resp.json({
        //                 test : "Many To Many",
        //                 data
        //             })
        // }
        
        //------------------------- Select -----------------------------//
        // const homeDetail = async (req:Request,resp:Response) => {

            // const entityManager = getManager();

            // let data = await entityManager
            // .createQueryBuilder()
            // .select("user")
            // .from(User,"user")
            // // .getMany();
            // // .getOne();
            // //.getRawMany(); // change clounm .select("u") ==> u_id or .select("test") ==> test_id
            // //.getCount(); // get only count 
            // .getManyAndCount(); // get data and also count 

            // let data = await entityManager
            // .getRepository(User)
            // .createQueryBuilder("u") 
            // // one  // no get => =: id , do like that =:id
            // // .where("u.id =:id",{id:1})
            // // two 
            // // .where("u.id =:id OR name =:mname",{id:2,mname:"Mr John"})
            // // three
            // // .where("u.id =:id OR name =:mname",{id:2,mname:"Mr John"})
            // // .andWhere('u.name =:name',{name:"Mr John"})
            // // four
            // .where("u.id =:id OR name =:mname",{id:2,mname:"Mr John"})
            // .orWhere('u.name =:name',{name:"Mr John"})
            // .orderBy("u.name")
            // .limit(1)
            // .offset(1)
            // .getMany();

        //     resp.json({
        //         test : "QueryBuilder",
        //         data
        //     })
            
        // }


        ////---------------------- insert  -------------------------//
        // const homeDetail = async (req:Request,resp:Response) => {
        //     const entityManager = getManager();
        //     let data = await entityManager
        //     .createQueryBuilder()
        //     .insert()
        //     .into(Employee)
        //     .values([
        //         {
        //             name : 'Employee A'
        //         },
        //         {
        //             name : 'Employee B'
        //         }
        //     ])
        //     .execute();

        //     resp.json({
        //         test : "QueryBuilder",
        //         data
        //     })
            
        // }


        // //---------------------- update  -------------------------//
        // const homeDetail = async (req:Request,resp:Response) => {

        // const entityManager = getManager();
            
        //     let data = await entityManager
        //     .createQueryBuilder()
        //     .update(Employee)
        //     .set({name : "Employee A Update"})
        //     .where("id =:id",{id:3})
        //     .execute();

        //     resp.json({
        //             test : "QueryBuilder",
        //             data
        //         })
                
        // }

        //---------------------- delete  -------------------------//
        const homeDetail = async (req:Request,resp:Response) => {

        const entityManager = getManager();
            
            let data = await entityManager
            .createQueryBuilder()
            .delete()
            .from(Employee)
            .where("id =:id",{id:3})
            .execute();

            resp.json({
                    test : "QueryBuilder",
                    data
                })
                
        }

        
export {
    homeDetail
}