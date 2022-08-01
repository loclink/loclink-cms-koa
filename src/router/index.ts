import fs from 'fs';
import Koa from 'koa';
import Router from 'koa-router';

const autoRegisterRouter = (app: Koa) => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (['index.js', 'index.ts'].includes(file)) return;
    const router: {
      default: Router;
    } = require(`./${file}`);
    if (!router.default) return;
    app.use(router.default.routes());
    app.use(router.default.allowedMethods());
  });
};

export default autoRegisterRouter;
