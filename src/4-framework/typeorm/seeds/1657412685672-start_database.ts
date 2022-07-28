import { MigrationInterface, QueryRunner } from 'typeorm';
import bcrypt, { genSalt } from 'bcrypt';
import { UserStatusModel } from '../models/user-status.model';
import { UserModel } from '../models/user.model';
export class startDatabase1657412685672 implements MigrationInterface {
  /**
   * Método povoa o banco de dados
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userStatusModelRepository = await queryRunner.manager.getRepository(
      UserStatusModel,
    );
    const userModelRepository = await queryRunner.manager.getRepository(
      UserModel,
    );
    const salt = await genSalt(12);
    const password = await bcrypt.hash('Teste@123', salt);
    const statusUser1 = await userStatusModelRepository.save({
      isVerified: true,
    });
    const user1 = await userModelRepository.save({
      username: 'First User',
      email: 'first user',
      phone: '33988888888',
      birthday: '1994/03/09',
      userStatusId: statusUser1.id,
      password,
    } as any);
  }

  /**
   *
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
