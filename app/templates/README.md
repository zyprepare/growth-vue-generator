# growth-vue

前端脚手架，支持vue框架，支持最新的最基本的前端开发环境。<br>

基于webpack4打包静态文件，支持单页面和多页面入口，支持最新js语法和sass语法。<br>

使用eslint验证代码规范性，使用mock-server模拟API请求响应数据。<br>

文件规范：所有的页面必须在src的pages目录中创建，格式为：pages/文件名/index.ejs、pages/文件名/index.js，其中，.ejs为模板文件，.js为程序入口文件。<br>

## 使用步骤：
  在项目根目录执行 npm install <br>
  本地开发时执行命令 npm start <br>
  模拟后台接口执行命令 npm run mock <br>
  检查代码执行命令 npm run lint <br>
  打上线包执行命令 npm run build
