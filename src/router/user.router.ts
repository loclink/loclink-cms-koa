import Router from 'koa-router';
import { verifyUserExist, verifyCreateUser } from '../middleware/user.middleware';
import { userSignUp, userInfo, userMenuList, userList } from '../controller/user.controller';
import { handlePasswordMd5 } from '../middleware/user.middleware';
import { verifyToken } from '../middleware/auth.middleware';

const userRouter = new Router({ prefix: '/user' });

// 创建(注册)用户
userRouter.post('/', verifyCreateUser, verifyUserExist, handlePasswordMd5, userSignUp);

// 获取用户信息
userRouter.post('/info', verifyToken, userInfo);

// 获取用户菜单
userRouter.get('/menu', verifyToken, userMenuList);

// 获取用户列表
userRouter.get('/list', verifyToken, userList);
export default userRouter;
