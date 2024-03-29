import Router from 'koa-router';
import { verifyUserExist, verifyParams, verifySignUpCode } from '../middleware/user.middleware';
import { userSignUp, userInfo, userMenuList, userList } from '../controller/user.controller';
import { handlePasswordMd5 } from '../middleware/user.middleware';
import { verifyToken } from '../middleware/auth.middleware';
import { verifyListParams } from '../middleware/verify.middleware';

const userRouter = new Router({ prefix: '/user' });

// 创建(注册)用户
userRouter.post('/', verifyParams, verifySignUpCode, verifyUserExist, handlePasswordMd5, userSignUp);

// 获取用户信息
userRouter.post('/info', verifyToken, userInfo);

// 获取用户菜单
userRouter.get('/menu', verifyToken, userMenuList);

// 获取用户列表
userRouter.post('/list', verifyToken, verifyListParams, userList);

export default userRouter;
