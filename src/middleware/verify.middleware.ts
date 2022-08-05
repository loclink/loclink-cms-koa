import { Context, Next } from 'koa';

const verifyListParams = async (ctx: Context, next: Next) => {
  const { limit, offset } = ctx.request.query;
  ctx.request.body.limit = limit ?? 10;
  ctx.request.body.offset = offset ?? 0;
  await next();
};

export { verifyListParams };
