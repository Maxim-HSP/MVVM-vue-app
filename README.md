# vue_app

项目入口：

1.直接双击运行根目录startApp.bat。
（运行environment文件夹中的后台环境，同时run dev）


2.如果出错，则手动运行mongodb、3001端口项目(如之前的reduxa_app)，以及npm run dev，并打开chrome访问：
http://localhost:8080



-- 注释方面部分参考了vue中文官网API文档，优化了项目文件结构，可搭配自身笔记来复习

-- vue页面主要是vue组件化及vue-router的使用（包括props、templates等属性用法,以及基础的data、method属性编写等）
	//vue页面入口js文件（根组件）为   "./src/main.js"  (相对于index.html)

-- vuex页面除使用vue和router外，加入了vuex（在根组件vuexApp中进行注入，router也同理），同时使用了vuex的modules属性进行了模块化，注意查看不同组件和store模块的js代码
-- 另外，在vuex模块，除两项基本实例外，另有一个基础练习实例，其中详细注释了vuex创建一个store实例后如何操作以及各种操作的说明，搭配代码查看
	//vuex页面入口js文件（根组件）为   "./src/vuex_app/vuex.js"  ,页面为vuex.html

-- webpack的代码压缩已关闭（便于使用debug）,可在webpack.config.js中配置


-- 推荐将这个项目保存起来，如果以后需要用到vue的时候拿出来复习回忆

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
