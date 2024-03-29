// 引入serve
const app = require('../../app')
// 引入express
const express = require('express');
// 引入path
const path = require('path')
const requestUrl = path.join(path.resolve(__dirname, '..', '..'), 'uploadFile', 'images')


// 开放图片访问权限，解决图片跨域
app.use('/images', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// 开放用户上传图片
app.use('/images', express.static(requestUrl));