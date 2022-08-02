import Router from 'koa-router';
import { userSignIn } from '../controller/user.controller';
import { signToken } from '../middleware/auth.middleware';
import { handlePasswordMd5, verifyParams, verifyPasswordValid } from '../middleware/user.middleware';
const loginRouter = new Router({ prefix: '/auth' });

// 用户登录
loginRouter.post('/', verifyParams, handlePasswordMd5, verifyPasswordValid, signToken, userSignIn);

export default loginRouter;
