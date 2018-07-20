# growth-vue-generator
前端脚手架生成器，支持vue框架，支持最新的最基本的前端开发环境。<br>

基于webpack4打包静态文件，支持单页面和多页面入口，支持最新js语法和sass语法。<br>

使用eslint验证代码规范性，使用mock-server模拟API请求响应数据。<br>

文件规范：所有的页面必须在src的pages目录中创建，格式为：pages/文件名/index.ejs、pages/文件名/index.js，其中，.ejs为模板文件，.js为程序入口文件。<br>

## 使用步骤：
  ### 在项目根目录下执行命令：
  1、npm i -g yo<br>
  2、npm i -g generator-lightvue<br>
  3、yo lightvue
