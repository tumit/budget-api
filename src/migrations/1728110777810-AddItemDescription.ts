import { MigrationInterface, QueryRunner } from "typeorm";

export class AddItemDescription1728110777810 implements MigrationInterface {
    name = 'AddItemDescription1728110777810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."idx_item_title"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "description" character varying NOT NULL DEFAULT 'Waiting description'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "description"`);
        await queryRunner.query(`CREATE INDEX "idx_item_title" ON "item" ("title") `);
    }

}
