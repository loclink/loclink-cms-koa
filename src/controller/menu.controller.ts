import { Context } from 'koa';
import { getMenuList, insertMenu } from '../service/menu.service';

// 获取菜单
const menuList = async (ctx: Context) => {
  const menuList = await getMenuList();
  ctx.success('菜单列表数据请求成功', menuList);
};

// 创建菜单
const createMenu = async (ctx: Context) => {
  await insertMenu(ctx.request.body);
  ctx.success('创建菜单成功');
};

export { menuList, createMenu };
