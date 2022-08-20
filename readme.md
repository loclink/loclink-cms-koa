## 概述：

本项目为 loclink-cms 后台系统的接口服务，基于 Koa2、TypeScript、Typeorm 而开发，开发目的为着重体验 Koa2 与 TypeScript 相结合的开发模式与传统 Koa2 + JavaScript 有哪些不同

## 项目难点：

1. 初次使用第三方库 Typeorm 来操作数据库，与之前的 sequelize 相比存在很多差异，例如：模型大量使用了 Ts 的装饰器来传参。
2. 数据库多表连接操作与子查询以及模糊查询（like）在 Typeorm 上操作实践较为困难，文档中也未给出相关的更多具体示例

## 本地尝试：

### 一、在项目根目录下新建`.env`文件并在`.env` 文件中写入以下配置：

.env 配置文件说明（请按实际情况配置）：

```shell
  APP_HOST=0.0.0.0 # 服务器启动ip
  APP_PORT=7777 # 服务器启动端口
  MYSQL_HOST=127.0.0.1 # 数据库ip地址
  MYSQL_PORT=3306 # 数据库端口
  MYSQL_DARABASE=t_loclink_cms # 数据库名称
  MYSQL_USER=root # 数据库连接用户
  MYSQL_PASSWORD=tj991118 # 数据库连接密码
  ADMIN_NAME=admin # 初始管理员账号
  ADMIN_PASSWORD=admin # 初始管理员密码
```

### 二、初始化数据库（初次使用本项目必要操作）:

```shell
npm run init:db
```

### 三、运行开发环境:

```shell
npm run dev
```

### 四、运行生产环境:

```shell
npm run build 
npm run start
```

## 注意事项：

在项目中`src/app/keys/`目录下默认存在一个秘钥对，此秘钥对作为 JsonWebToken 的非对称加密使用，每次非登录相关接口的请求所携带的 token 就是由此秘钥对生成，具体实现方法可查看：`src/middleware/auth.middleware.ts` 此中间件。

**注意：在真实开发中，通常是不推荐将秘钥对上传至仓库的，此操作会导致很多安全性的问题，本项目将秘钥对上传的原因是方便个人部署，若你不想使用仓库自带秘钥对，则可以使用以下操作生成自己的秘钥对，并将其放置 `src/app/keys/` 下。**

- windows 下： 在 git bash 中执行以下命令
- Mac 或 Linux 下： 在默认终端执行以下命令即可

```shell
openssl # 打开openssl工具

genrsa -out private.key 1024  # 生成私钥

rsa -in private.key -pubout -out public.key #生成公钥
```
