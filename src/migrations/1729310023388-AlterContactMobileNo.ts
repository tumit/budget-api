import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterContactMobileNo1729310023388 implements MigrationInterface {
    name = 'AlterContactMobileNo1729310023388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" RENAME COLUMN "contactMobileNo" TO "contact_mobile_no"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" RENAME COLUMN "contact_mobile_no" TO "contactMobileNo"`);
    }

}
