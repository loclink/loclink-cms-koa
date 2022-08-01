import { Context } from 'koa';
import { ISuccessType, IErrorType } from '../constanst/types';

// 处理请求成功返回信息
export const successHandler = (successInfo: ISuccessType, ctx: Context) => {
  successInfo.code = 200;
  ctx.body = successInfo;
};

// 错误处理
export const errorHandler = (error: IErrorType, ctx: Context) => {
  ctx.body = {
    code: error.code ?? 500,
    message: error.message
  };
};
