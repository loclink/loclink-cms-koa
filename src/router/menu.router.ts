import Router from 'koa-router';
import { createMenu, menuList } from '../controller/menu.controller';
import { verifyToken } from '../middleware/auth.middleware';

const menuRouter = new Router({ prefix: '/menu' });

menuRouter.get('/', verifyToken, menuList);
menuRouter.post('/', verifyToken, createMenu);

export default menuRouter;
