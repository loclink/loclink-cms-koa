import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import Role from './Role';

@Entity({ name: 'user' })
export default class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'varchar',
    comment: '用户名',
    unique: true
  })
  username: string;

  @Column({
    type: 'varchar',
    comment: '密码',
    select: false
  })
  password?: string;

  @OneToOne(() => Role)
  @JoinColumn({ name: 'role' })
  @Column({ comment: '角色id', default: 1 })
  role?: Role & number;

  @Column({
    comment: '上次登录ip地址',
    nullable: true
  })
  last_login_ip?: string;

  @Column({
    comment: '上次登录时间',
    nullable: true
  })
  last_login_time?: number;

  @Column({ comment: '创建时间' })
  created?: number;

  @Column({ comment: '更新时间' })
  updated?: number;
}
