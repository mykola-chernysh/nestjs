import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: true })
  name?: string;

  @Column('text')
  email: string;

  @Column('text', { select: false })
  password: string;

  @CreateDateColumn()
  created: Date;

  @CreateDateColumn()
  updated: Date;
}
