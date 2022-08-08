import Koa from 'koa';
import { autoRegisterEntity } from './src/entity';
import BlogMenu from './src/entity/BlogMenu';
import Logs from './src/entity/Logs';
import Menu from './src/entity/Menu';
import Role from './src/entity/Role';
import User from './src/entity/User';

type IPage = {
  limit?: number;
  offset?: number;
  createdRange?: number[];
};
type ResultType = Menu & User & Role & BlogMenu & Logs & IPage;

declare module 'koa' {
  interface Request {
    body?: ResultType;
    query?: ResultType;
  }

  interface BaseContext {
    userInfo?: User & { token?: string; iat?: number; exp?: number };
    emitError?(errorType: { code: number | string; message: string }): void;
    success?(message?: string, data?: object): void;
    currentState?(): { date: number; ip: string };
  }
}
