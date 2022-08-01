 ## 一、在项目根目录下配置.env文件

  .env 配置文件说明：

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

## 二、初始化数据库
``` shell
npm run init:db
```

## 三、运行开发环境
``` shell
npm run dev
```

## 四、运行生产环境
``` shell
npm run start
```


使用 openssl 工具生成一对私钥和公钥

```shell
openssl
> genrsa -out private.key 1024
> rsa -in private.key -pubout -out public.key
```




