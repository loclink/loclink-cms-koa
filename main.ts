import app from './src/app';
import config from './src/app/config';
import { createDatabaseConnect } from './src/app/database';

app.listen(config.APP_PORT, config.APP_HOST, () => {
  console.log(`服务器启动成功: 端口：${config.APP_PORT}`);
  createDatabaseConnect();
});
