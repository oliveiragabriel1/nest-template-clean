import { IUserStatusEntity } from '@/1-domain/entities';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_status')
export class UserStatusModel implements IUserStatusEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public isBlocked: boolean;

  @Column()
  public isDeleted: boolean;

  @Column()
  public isVerified: boolean;

  @Column()
  public isPermanentBanned: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  public deletedAt?: Date;
}
