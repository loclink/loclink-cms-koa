import { Context, Next } from 'koa';
import ERROR_TYPES from '../constanst/error-types';

// 校验并转化权限菜单id列表
const verifyRoleMenuPermission = async (ctx: Context, next: Next) => {
  const { role_menu_permission } = ctx.request.body;
  if (!Array.isArray(role_menu_permission)) ctx.emitError(ERROR_TYPES.PARAMETER_ERROR);
  const strMenuIds = (role_menu_permission as unknown as [number]).join(',');
  ctx.request.body.role_menu_permission = strMenuIds;
  await next();
};

export { verifyRoleMenuPermission };
