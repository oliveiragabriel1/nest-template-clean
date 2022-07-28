import { MigrationInterface, QueryRunner } from 'typeorm';

export class createAddress1657281399615 implements MigrationInterface {
  /**
   * Executa a migration
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.query(`CREATE TABLE create_addresses (        
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "street" VARCHAR(255) NOT NULL UNIQUE,
        "addrnumber" INTEGER NOT NULL,
        "city" VARCHAR(255) NOT NULL,
        "state"  VARCHAR(255) NOT NULL,   
        "zipcode"  VARCHAR(255) NOT NULL,     
        "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "deleted_at" TIMESTAMP,      
        PRIMARY KEY ("id"))
        `);
  }
  /**
   * Reverte a migration
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "create_addresses"`);
  }
}
