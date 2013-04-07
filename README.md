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
