import { Context } from 'koa';
import { getRoleList, insertUserRole } from '../service/role.service';

// 创建用户角色
const createUserRole = async (ctx: Context) => {
  await insertUserRole(ctx.request.body);
  ctx.success('创建角色成功');
};

const roleList = async (ctx: Context) => {
  const result = await getRoleList();
  ctx.success('获取角色列表成功', result);
};

export { roleList, createUserRole };
