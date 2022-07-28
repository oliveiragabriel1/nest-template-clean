import { MigrationInterface, QueryRunner } from 'typeorm';

export class createStatusUser1657283697238 implements MigrationInterface {
  /**
   * Executa a migration
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE user_status (        
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "isBlocked" boolean NOT NULL DEFAULT false,
        "isDeleted" boolean NOT NULL DEFAULT false,
        "isVerified" boolean NOT NULL DEFAULT false,
        "isPermanentBanned" boolean NOT NULL DEFAULT false,      
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
    await queryRunner.query(`DROP TABLE "user_status"`);
  }
}
