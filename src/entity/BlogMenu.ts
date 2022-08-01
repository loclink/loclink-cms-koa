import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity({ name: 'blog_menu' })
export default class BlogMenu {
  @PrimaryGeneratedColumn({
    comment: '博客菜单id'
  })
  id?: number;

  @Column({
    type: 'varchar',
    comment: '博客菜单标题'
  })
  title: string;

  @Column({
    type: 'varchar',
    comment: '博客菜单icon',
    nullable: true
  })
  icon?: string;

  @Column({
    comment: '博客菜单排序',
    default: 0
  })
  sort?: number;

  @Column({
    comment: '博客菜单类型：[1: 一级菜单 2: 二级菜单]',
    default: 1
  })
  menu_type?: number;

  @ManyToOne((type) => BlogMenu, (Menu) => Menu.children_menu)
  @JoinColumn({ name: 'parent_id' })
  @Column({ comment: '父级菜单id', nullable: true })
  parent_id?: BlogMenu | number;

  @OneToMany((type) => BlogMenu, (menu) => menu.parent_id)
  children_menu?: BlogMenu[];

  @Column({ comment: '创建时间' })
  created?: number;

  @Column({ comment: '更新时间' })
  updated?: number;
}
