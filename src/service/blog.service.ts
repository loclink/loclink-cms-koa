import { AppDataSource } from '../app/database';
import BlogMenu from '../entity/BlogMenu';

// 插入博客菜单数据
const insertBlogMenu = async (blogMenuData: BlogMenu) => {
  await AppDataSource.createQueryBuilder().insert().into(BlogMenu).values(blogMenuData).execute();
};

// 获取博客菜单列表
const getBlogMenuList = async () => {
  const result = await AppDataSource.createQueryBuilder().select('blog_menu').from(BlogMenu, 'blog_menu').getMany()
  return result
}



export { insertBlogMenu,getBlogMenuList };
