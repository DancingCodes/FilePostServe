// 引入serve
const app = require('../app')
// 引入express
const express = require('express');

// 获取URL-encoded格式的请求数据（psot接受的请求数据）（必须配置在路由之前）
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// 导入路由模块
const uploadFile = require('./uploadFile')

// 注册路由模块
app.use(uploadFile);