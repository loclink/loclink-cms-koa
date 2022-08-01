import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import autoRegisterRouter from '../router';
import corsStrategy from './cors';
import registerGlobalMiddleware from './global';

const app = new Koa();

// 处理跨域
app.use(corsStrategy);

// 处理body参数解析
app.use(bodyParser());

// 注册全局中间件
app.use(registerGlobalMiddleware(app));

// 自动注册路由
autoRegisterRouter(app);

export default app;
