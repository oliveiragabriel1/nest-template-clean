import { MigrationInterface, QueryRunner } from 'typeorm';
/**
 * 
 *  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public isBlocked: boolean;

  @Column()
  public isDeleted: boolean;

  @Column()
  public isVerified: boolean;

  @Column()
  public isPermanentBanned: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @Column({ nullable: true })
  public deletedAt?: Date;
 */
export class createStatusCreator1657282667301 implements MigrationInterface {
  /**
   * Executa a migration
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE creator_status (        
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "is_blocked" boolean NOT NULL DEFAULT false,
        "is_deleted" boolean NOT NULL DEFAULT false,
        "is_verified" boolean NOT NULL DEFAULT false,
        "is_permanent_banned" boolean NOT NULL DEFAULT false,      
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
    await queryRunner.query(`DROP TABLE "creator_status"`);
  }
}
