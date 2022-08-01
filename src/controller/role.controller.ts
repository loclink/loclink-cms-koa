import { Context } from 'koa';
import { insertUserRole } from '../service/role.service';

// 创建用户角色
const createUserRole = async (ctx: Context) => {
  await insertUserRole(ctx.request.body);
  ctx.success('创建角色成功');
};

export { createUserRole };
