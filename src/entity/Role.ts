import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'role' })
export default class Role {
  @PrimaryGeneratedColumn({
    comment: '角色id'
  })
  id?: number;

  @Column({
    type: 'varchar',
    comment: '角色名称'
  })
  role_name?: string;

  @Column({
    type: 'varchar',
    comment: '角色描述',
    default: '',
    nullable: true
  })
  role_description?: string;

  @Column({
    comment: '角色菜单权限',
    nullable: true,
    select: false
  })
  role_menu_permission?: string;

  @Column({
    comment: '注册码',
    default: '',
    select: false
  })
  sign_up_code?: string;

  @Column({ comment: '创建时间', select: false })
  created?: number;

  @Column({ comment: '更新时间', select: false })
  updated?: number;
}
