import { Context } from 'koa';
import { getBlogMenuList, insertBlogMenu } from '../service/blog.service';

// 创建博客菜单
const createBlogMenu = async (ctx: Context) => {
  await insertBlogMenu(ctx.request.body);
  ctx.success('创建博客菜单成功');
};

// 博客菜单列表
const blogMenuList = async (ctx: Context) => {
  const blogMenuList = await getBlogMenuList();
  ctx.success('获取博客菜单列表成功', blogMenuList);
};

export { createBlogMenu, blogMenuList };
