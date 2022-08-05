import { Context, Next } from 'koa';
import { md5Password } from '../utils/handle-password';
import { getUserByName } from '../service/user.service';
import { getRoleBySignUpCode } from '../service/role.service';
import ERROR_TYPES from '../constanst/error-types';

// 密码md5加密
const handlePasswordMd5 = async (ctx: Context, next: Next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5Password(password);
  await next();
};

// 公共的账号参数校验
const verifyParams = async (ctx: Context, next: Next) => {
  const { username, password } = ctx.request.body;
  // 校验账号密码是否为空
  if (!username || !password) ctx.emitError(ERROR_TYPES.INCORRECT_USERNAME_OR_PASSWORD);

  // 其他校验....
  await next();
};

const verifySignUpCode = async (ctx: Context, next: Next) => {
  const { sign_up_code } = ctx.request.body;

  // 校验注册码是否为空
  if (!sign_up_code) ctx.emitError(ERROR_TYPES.REGISTRATION_CODE_ERROR);

  // 查询注册码对应角色
  const roleData = await getRoleBySignUpCode(sign_up_code);
  if (!roleData) ctx.emitError(ERROR_TYPES.REGISTRATION_CODE_ERROR);

  // 校验后注册数据携带role_id
  ctx.request.body.role = roleData.id;
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


export {
  handlePasswordMd5,
  verifyParams,
  verifySignUpCode,
  verifyUserExist,
  verifyPasswordValid
};
