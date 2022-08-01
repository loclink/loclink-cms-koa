import Router from 'koa-router';
import { userSignIn } from '../controller/user.controller';
import { signToken } from '../middleware/auth.middleware';
import { handlePasswordMd5, verifyCreateUser, verifyPasswordValid } from '../middleware/user.middleware';
const loginRouter = new Router({ prefix: '/auth' });

// 用户登录
loginRouter.post('/', verifyCreateUser, handlePasswordMd5, verifyPasswordValid, signToken, userSignIn);

export default loginRouter;
