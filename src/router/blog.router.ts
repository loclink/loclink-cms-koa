import Router from 'koa-router';
import { createBlogMenu,blogMenuList } from '../controller/blog.controller';
const blogRouter = new Router({ prefix: '/blog' });
blogRouter.post('/menu', createBlogMenu)
blogRouter.get('/menu',blogMenuList )
export default blogRouter;
