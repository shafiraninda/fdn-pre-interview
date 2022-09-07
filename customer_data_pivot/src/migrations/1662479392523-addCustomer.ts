import {MigrationInterface, QueryRunner} from "typeorm";

export class addCustomer1662479392523 implements MigrationInterface {
    name = 'addCustomer1662479392523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "email" character varying NOT NULL, "item" character varying NOT NULL, "quantity" integer NOT NULL, "total_price" numeric NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
