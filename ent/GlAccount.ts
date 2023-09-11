import { EntitySchema } from "typeorm";



export const CityEntity = new EntitySchema({
    name : 'gl_accounts',
    columns : {
        id: {
            type : Number,
            primary : true,
            generated : true
        },
        name : {
            type : String,
            length : 20,
        },
        type : {
            type : String,
            nullable : false,
        },
        reference_id : {
            type : String,
            nullable : false,
        },
        amount : {
            type : Number,
            nullable : false,
        }
    },
    checks:[
        {
            expression : `"amount" > 0  `
        }
    ]
})