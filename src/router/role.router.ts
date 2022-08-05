import Router from 'koa-router';
import { createUserRole, roleList } from '../controller/role.controller';
import { verifyToken } from '../middleware/auth.middleware';
import { verifyRoleMenuPermission } from '../middleware/role.middleware';
import { verifyListParams } from '../middleware/verify.middleware';
const roleRouter = new Router({ prefix: '/role' });

// 创建角色
roleRouter.post('/', verifyToken, verifyRoleMenuPermission, createUserRole);
roleRouter.post('/list', verifyToken, verifyListParams, roleList);

export default roleRouter;
