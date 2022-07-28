import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUser1657283697239 implements MigrationInterface {
  /**
   * Executa a migration
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE users (        
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "email" VARCHAR(255) NOT NULL UNIQUE,
        "username" VARCHAR(255) NOT NULL,
        "birthday" VARCHAR(255) NOT NULL,
        "password"  VARCHAR(255) NOT NULL,        
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),         
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "user_status_id" uuid NOT NULL REFERENCES user_status("id") ON UPDATE CASCADE,  
        "deleted_at" TIMESTAMP,     
        PRIMARY KEY ("id"))
        `);
  }
  /**
   * Reverte a migration
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
