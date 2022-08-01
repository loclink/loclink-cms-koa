import Router from 'koa-router';
import { createUserRole } from '../controller/role.controller';
import { verifyToken } from '../middleware/auth.middleware';
import { verifyRoleMenuPermission } from '../middleware/role.middleware';

const roleRouter = new Router({ prefix: '/role' });

// 创建角色
roleRouter.post('/', verifyToken, verifyRoleMenuPermission, createUserRole);

export default roleRouter;
