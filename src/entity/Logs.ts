import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'logs' })
export default class Logs {
  @PrimaryGeneratedColumn({
    comment: '日志id'
  })
  id?: number;

  @Column({
    type: 'varchar',
    comment: '日志内容'
  })
  content: string;

  @Column({
    type: 'varchar',
    comment: '操作人',
    nullable: true
  })
  operator?: string;


  @Column({ comment: '创建时间' })
  created?: number;

  @Column({ comment: '更新时间' })
  updated?: number;
}
