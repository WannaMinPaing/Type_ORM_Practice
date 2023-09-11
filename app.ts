import express,{Request,Response} from 'express';
import { createConnection } from 'typeorm';
// import {User} from './entity/User';
// import {Product} from './entity/Product';
import { router } from "./routes/routes";


const app = express();
const PORT = 4011;
app.use('/',router)

//------------ it auto use (ormconfig.json) and plz remove .env  file -----//
// In Json File \|/
// "migrations" : ["migration/*.ts"], 
//"cli" : {
//    "migrationsDir" : "migration" (Folder path for migration file)
//}


//  Command for to create migration file ==> typeorm migration:create migration/usermigration (usermigration is table, migration file name)
//  Command for to run migration file ==>  ts-node ./node_modules/typeorm/cli.js migration:run -d ormconfig-old.ts
//  Command for to revert colunm ==> ts-node ./node_modules/typeorm/cli.js migration:revert -d ormconfig-old.ts


createConnection().then(()=>{
    console.log("DB connected")
}).catch((e)=>{
    console.log("Error "+ e )
})

//--------------- use one up or down ---------------//

// createConnection({
//     type:"mysql",
//     host:"127.0.0.1",
//     port:3306,
//     username:"root",
//     password:"",
//     // database:"new_dong_fang_pay2",
//     database:"test_type_orm",
//     // synchronize => true => any table has realtionship(one to one, one to many , many to many ) and or else false
//     synchronize:true,
//     entities:['./ent-rel/*.ts'],
//     // entities:['./entity/*.ts'],
//     // entities:['./ent/*.ts'],
//     // entities:[User,Product],
//     logging:true
// }).then(()=>{
//     console.log("DB connected")
// }).catch((e)=>{
//     console.log("Error "+ e )
// })


app.get('/test',(req:Request,resp:Response)=>{
    resp.json({
        data : "test done"
    })
})

app.listen(PORT,():void => {
    console.log("Server is running on "+PORT)
})