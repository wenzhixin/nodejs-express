# nodejs express MVC

基于 nodejs 和 express 的 MVC 框架


### 1. 数据库

1) 创建数据库：

	CREATE DATABASE nodejs_express DEFAULT CHARACTER SET utf8;

2) 创建用户表：

	CREATE TABLE users (  
	    id int(11) NOT NULL AUTO_INCREMENT,  
	    username varchar(50) NOT NULL,
	    password varchar(50) NOT NULL,
	    PRIMARY KEY (id)  
	) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
	
3) 插入数据：

	INSERT INTO users(username, password) values('zhixin', 'admin');

### 2. 使用

1) 安装 node_modules

	npm install
	
2) 设置 config.js

	{
		name: 'nodejs_express',
		port: 10000,
		mysql: {
			database: 'nodejs_express',
			host: 'localhost',
			user: 'root',
			password: 'password',
			insecureAuth: true
		},
		debug: true
	}
	
name：项目名称  
port：服务端口  
mysql：设置 mysql 数据库  
debug：是否显示调试信息  
	
3) 启动

	node app
	
### 3. 文件说明

	helpers：
		---loghelper.js: 日志输出
		---sqlhelper.js: mysql 帮助类
	
	html: 静态文件夹(html, css, js)
	
	logs: 日志信息
		---access.log
		---error.log
	
	models: 模型
		---user.js: 用户模型

	routes: 路由		
		---index.js: 主路由
		---user.js: 用户路由
		
	app.js: 主文件
	
	config.js: 配置文件
	
	package.json: 项目信息
