import { Context, Next } from 'koa';

const verifyListParams = async (ctx: Context, next: Next) => {
  const { limit, offset, createdRange } = ctx.request.body;

  ctx.request.body.offset = offset ?? 0;
  ctx.request.body.limit = limit ?? 10;

  if (createdRange) {
    ctx.request.body.createdRange[0] = Math.round(new Date(createdRange[0]).getTime() / 1000);
    ctx.request.body.createdRange[1] = Math.round(new Date(createdRange[1]).getTime() / 1000);
  } else {
    ctx.request.body.createdRange = [0, Math.round(new Date().getTime() / 1000)];
  }
  await next();
};

export { verifyListParams };
