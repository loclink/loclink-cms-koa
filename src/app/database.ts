import path from 'path';
import 'reflect-metadata';
import config from './config';

import { DataSource } from 'typeorm';
import { GlobalSubscriber } from '../subscriber/global.subscriber';
import { MenuSubscriber } from '../subscriber/menu.subscriver';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  username: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DARABASE,
  synchronize: process.env.NODE_ENV === 'INIT' ? true : false,
  logging: true,
  entities: [path.resolve(__dirname, '../entity/*.js'), path.resolve(__dirname, '../entity/*ts')],
  migrations: [path.resolve(__dirname, '../migrations/*.js'), path.resolve(__dirname, '../migrations/*ts')],
  subscribers: [GlobalSubscriber, MenuSubscriber]
});

// 创建数据库连接
const createDatabaseConnect = async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log('数据库连接成功');
    })
    .catch(async (err) => {
      console.log(err);
    });
};

export { createDatabaseConnect };
