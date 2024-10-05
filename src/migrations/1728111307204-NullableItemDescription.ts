import { MigrationInterface, QueryRunner } from "typeorm";

export class NullableItemDescription1728111307204 implements MigrationInterface {
    name = 'NullableItemDescription1728111307204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "description" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "description" SET DEFAULT 'Waiting description'`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "description" SET NOT NULL`);
    }

}
