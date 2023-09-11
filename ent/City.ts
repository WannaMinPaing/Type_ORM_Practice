import { EntitySchema } from "typeorm";

export interface City{
    id:number,
    name: String
}

export const CityEntity = new EntitySchema<City>({
    name : 'cities',
    columns : {
        id: {
            type : Number,
            primary : true,
            generated : true
        },
        name : {
            type : String
        }
    }
})