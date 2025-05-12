const express = require('express');
const path = require('path');
const app = express();

// 设置全局变量
app.locals.apiUrl = process.env.API_URL || "";

// 设置模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 静态文件
app.use(express.static(path.join(__dirname, 'public')));
app.use('/materialize', express.static(path.join(__dirname, 'node_modules/materialize-css/dist')));

// 路由
app.get('/', (req, res) => {
    res.render('index/index/index'); // 初始时用户未登录
});

app.get('/about', (req, res) => {
    res.render('index/about/index');
});

app.get('/profile', (req, res) => {
    res.render('user/profile/index');
});

app.get('/login', (req, res) => {
    res.render('user/login/index');
});

app.get('/register', (req, res) => {
    res.render('user/register/index');
});

app.get('/cart', (req, res) => {
    res.render('user/cart/index');
});

app.get('/product/:id/edit', (req, res) => {
    res.render('product/edit/index');
});

app.get('/product/:id/detail', (req, res) => {
    res.render('product/detail/index');
});

app.get('/my-products', (req, res) => {
    res.render('product/my/index');
});

app.get('/products/new', (req, res) => {
    res.render('product/publish/index');
});

app.get('/orders', (req, res) => {
    res.render('user/orders/index');
});

app.get('/balance', (req, res) => {
    res.render('user/balance/index');
});

app.get('/reset-password', (req, res) => {
    res.render('user/reset/index');
});

app.get('/modify-password', (req, res) => {
    res.render('user/password/index');
});

app.get('/email', (req, res) => {
    res.render('index/email');
});

// 404 中间件
app.use((req, res, next) => {
    res.render('index/404/index'); // 发送 404 页面
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

exports.app = app;