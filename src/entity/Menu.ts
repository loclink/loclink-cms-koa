import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity({ name: 'menu' })
export default class Menu {
  @PrimaryGeneratedColumn({
    comment: '菜单id'
  })
  id?: number;

  @Column({
    type: 'varchar',
    comment: '菜单标题'
  })
  title: string;

  @Column({
    type: 'varchar',
    comment: '菜单对应路径'
  })
  path: string;

  @Column({
    type: 'varchar',
    comment: '菜单icon',
    nullable: true
  })
  icon?: string;

  @Column({
    comment: '菜单排序',
    default: 0
  })
  sort?: number;


  @ManyToOne((type) => Menu, (Menu) => Menu.children)
  @JoinColumn({ name: 'parent_id' })
  @Column({ comment: '父级菜单id', nullable: true })
  parent_id?: Menu | number;

  @OneToMany((type) => Menu, (menu) => menu.parent_id)
  children?: Menu[];

  @Column({ comment: '创建时间' })
  created?: number;

  @Column({ comment: '更新时间' })
  updated?: number;
}
