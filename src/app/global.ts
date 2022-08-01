import Koa, { Context, Next } from 'koa';

import { handleIP } from '../utils/handle-ip';
import { successHandler, errorHandler } from './result-handler';

// 注册全局中间件
function registerGlobalMiddleware(app: Koa) {
  // 监听处理错误
  app.on('error', errorHandler);

  // 监听处理成功
  app.on('success', successHandler);

  // 全局方法：提交错误
  app.context.emitError = function (this: Context, errorInfo) {
    this.throw(errorInfo);
  };

  // // 全局方法：提交成功
  app.context.success = function (this: Context, message, data) {
    const successInfo = { message, data };
    app.emit('success', successInfo, this);
  };

  // 全局方法：获取当前的一些状态
  app.context.currentState = function (this: Context) {
    const ip = handleIP(this.req);
    const date = new Date().getTime() / 1000;
    return { ip, date };
  };

  // 全局中间件
  return async function (ctx: Context, next: Next) {
    // 捕获到异常后提交errorHandle
    try {
      await next();
    } catch (error) {
      ctx.app.emit('error', error, ctx);
    }
  };
}

export default registerGlobalMiddleware;
