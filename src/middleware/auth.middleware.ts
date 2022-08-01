import { Context, Next } from 'koa';
import { checkToken, generateToken } from '../utils/handle-token';
import ERROR_TYPES from '../constanst/error-types';
import config from '../app/config';

// 签发token
const signToken = async (ctx: Context, next: Next) => {
  const { id, username, role } = ctx.userInfo;
  ctx.userInfo.token = generateToken({ id, username, role: role.id }, config.PRIVATE_KEY);
  await next();
};

// 校验token
const verifyToken = async (ctx: Context, next: Next) => {
  const { authorization } = ctx.headers;
  if (!authorization) ctx.emitError(ERROR_TYPES.TOKEN_CHECK_FAILED);
  const token = authorization.replace('Bearer ', '');
  try {
    const { id, username, role } = checkToken(token, config.PUBLIC_KEY) as any;
    ctx.userInfo = { id, username, role };
  } catch (error) {
    ctx.emitError(ERROR_TYPES.TOKEN_CHECK_FAILED);
  }
  await next();
};

export { signToken, verifyToken };
