import { Context, Next } from 'koa';
import { md5Password } from '../utils/handle-password';
import { getUserByName } from '../service/user.service';
import ERROR_TYPES from '../constanst/error-types';

// 密码md5加密
const handlePasswordMd5 = async (ctx: Context, next: Next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5Password(password);
  await next();
};

// 创建用户校验基本信息
const verifyCreateUser = async (ctx: Context, next: Next) => {
  const { username, password } = ctx.request.body;
  // 校验账号密码是否为空
  if (!username || !password) ctx.emitError(ERROR_TYPES.INCORRECT_USERNAME_OR_PASSWORD);

  // 其他校验....
  await next();
};

// 校验用户名和密码是否正确
const verifyPasswordValid = async (ctx: Context, next: Next) => {
  const { username, password } = ctx.request.body;
  ctx.userInfo = await getUserByName(username, true);
  ctx.userInfo || ctx.emitError(ERROR_TYPES.USERNAME_OR_PASSWORD_NOT_FOUND);
  if (password !== ctx.userInfo.password) ctx.emitError(ERROR_TYPES.USERNAME_OR_PASSWORD_NOT_FOUND);
  await next();
};

// 校验用户是否存在
const verifyUserExist = async (ctx: Context, next: Next) => {
  const { username } = ctx.request.body;
  const userInfo = await getUserByName(username);
  userInfo && ctx.emitError(ERROR_TYPES.USERNAME_ALREADY_EXISTS);
  await next();
};

export { handlePasswordMd5, verifyCreateUser, verifyUserExist, verifyPasswordValid };
