// 在Cloud code里初始化express框架
var express = require('express');
var app = express();

// App全局配置
app.set('views','cloud/views');   //设置模板目录
app.set('view engine', 'ejs');    // 设置template引擎
app.use(express.bodyParser());    // 读取请求body的中间件
app.use(express.cookieParser("mvoiwnaksdjijwf9823flkjasijdfae"));
//app.use(avosExpressCookieSession({cookie:{maxAge:3600}}));

//使用express路由API服务/hello的http GET请求
app.get('/hello', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});
app.post('/event/add', function(req, res) {
    var event = new AV.Object("Event");
    event.set("startDate", req.params.start_date);
});
app.post('/event/del', function(req, res) {
    
});
app.post('/event/query', function(req, res) {
    
});
app.post('/event/list', function(req, res) {
    
});
app.post('/user/login', function(req, res) {
    
});

//最后，必须有这行代码来使express响应http请求
app.listen();