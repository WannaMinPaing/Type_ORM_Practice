// //--------- old (ormconfig-old.ts) ---------------//
// module.exports = {
//     "type":"mysql",
//     "host":"127.0.0.1",
//     "port":3306,
//     "username":"root",
//     "password":"",
//     "'database'":"test_type_orm",
//     "synchronize":true
// }

import { DataSource } from 'typeorm';

const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test_type_orm',
    entities : ["./ent-rel/*.ts"],
    synchronize :true,
    migrationsTableName : "migration_table",
    migrations : ["migration/*.ts"],     
});

export default dataSource;

