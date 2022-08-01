import { Context } from 'koa';
import { createContext } from 'vm';
import { getMenuListByRoleId } from '../service/menu.service';
import { insertUser, updateUserByName, getUserByName, getUserList } from '../service/user.service';

// 用户注册
const userSignUp = async (ctx: Context) => {
  await insertUser(ctx.request.body);
  ctx.success('用户注册成功');
};

// 登录
const userSignIn = async (ctx: Context) => {
  const { date, ip } = ctx.currentState();
  await updateUserByName(ctx.request.body.username, {
    last_login_time: date,
    last_login_ip: ip
  });
  ctx.success('用户登录成功', { token: ctx.userInfo.token });
};

// 用户信息
const userInfo = async (ctx: Context) => {
  const userInfo = await getUserByName(ctx.userInfo.username);
  ctx.success('获取用户信息成功', userInfo);
};

// 用户菜单列表
const userMenuList = async (ctx: Context) => {
  const result = await getMenuListByRoleId(ctx.userInfo.role);
  ctx.success('获取用户菜单列表成功', result);
};

// 用户列表
const userList = async (ctx: Context) => {
  const result = await getUserList();
  ctx.success('获取用户列表成功', result);
};

export { userSignUp, userSignIn, userInfo, userMenuList, userList };
