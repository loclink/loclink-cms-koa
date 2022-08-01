import mysql from 'mysql2';
import { insertMenu } from '../service/menu.service';
import { insertUserRole } from '../service/role.service';
import { insertUser } from '../service/user.service';
import { md5Password } from '../utils/handle-password';
import { createDatabaseConnect } from './database';
import config from './config';

const db = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
});

const createDatabase = () => {
  return new Promise((resolve, reject) => {
    db.query(`CREATE DATABASE ${config.MYSQL_DARABASE}`, (err, result) => {
      if (err) {
        reject(err);
        throw err;
      }
      resolve(result);
    });
  });
};

// 初始化数据库数据
const initializationAction = async () => {
  console.log('开始初始化...');
  await createDatabase();
  console.log('数据库创建成功');
  await createDatabaseConnect();
  await insertUserRole({
    role_name: '超级管理员',
    role_description: '所有权限'
  });
  console.log('角色数据初始化完毕');
  await insertUser({
    username: config.ADMIN_NAME,
    password: md5Password(config.ADMIN_PASSWORD),
    role: 1
  });
  console.log('用户数据初始化完毕');
  await insertMenu([
    { title: '总览', sort: 1, path: '/main/overview' },
    { title: '博客管理', sort: 2, path: '/main/blog' },
    { title: '系统管理', sort: 3, path: '/main/system' },

    { title: '技术栈', parent_id: 1, sort: 1, path: '/main/overview/skill' },

    { title: '文章管理', parent_id: 2, sort: 1, path: '/main/blog/article' },
    { title: '标签管理', parent_id: 2, sort: 2, path: '/main/blog/article-tag'},

    { title: '用户管理', parent_id: 3, sort: 1, path: '/main/system/user' },
    { title: '菜单管理', parent_id: 3, sort: 2, path: '/main/system/menu' },
    { title: '角色管理', parent_id: 3, sort: 3, path: '/main/system/role' }
  ]);
  console.log('菜单数据初始化完毕');
  process.exit();
};

initializationAction();
