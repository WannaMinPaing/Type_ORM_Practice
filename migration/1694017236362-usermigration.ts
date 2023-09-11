import { MigrationInterface, QueryRunner } from "typeorm"

export class Usermigration1694017236362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `bid` INT NULL AFTER `name`")
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE user DROP bid")
    }
    
}
