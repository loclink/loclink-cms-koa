import User from '../entity/User';
import { AppDataSource } from '../app/database';
import { ResultType } from '../..';
import { Between, Like } from 'typeorm';

// 数据库操作使用 QueryBuilder 查询生成器
// 创建用户
const insertUser = async (userInfo: User) => {
  await AppDataSource.createQueryBuilder().insert().into(User).values(userInfo).execute();
};

// 根据用户名获取用户信息
const getUserByName = async (username: string, addPwd = false) => {
  const userInfo = await AppDataSource.createQueryBuilder()
    .select('user')
    .addSelect(addPwd ? 'user.password' : '')
    .from(User, 'user')
    .leftJoinAndSelect('user.role', 'role')
    .where('username = :username', { username })
    .getOne();
  return userInfo;
};

// 更新用户信息
const updateUserByName = async (username, userInfo) => {
  await AppDataSource.createQueryBuilder()
    .update(User)
    .where('username = :username', { username })
    .set(userInfo)
    .execute();
};

// 获取全部用户列表数据信息
const getUserList = async (params: ResultType) => {
  const { offset, limit, createdRange } = params;
  const where = {
    username: Like(`%${params.username ?? ''}%`),
    role: Like(`%${params.role ?? ''}%`),
    created: Between(createdRange[0], createdRange[1])
  };

  const result = await AppDataSource.createQueryBuilder()
    .select('user')
    .from(User, 'user')
    .leftJoinAndSelect('user.role', 'role')
    .where(where)
    .skip(offset)
    .take(limit)
    .getMany();

  const total = await AppDataSource.getRepository(User).countBy(where);

  const data = {
    list: result,
    total
  };
  return data;
};

export { insertUser, getUserByName, updateUserByName, getUserList };
