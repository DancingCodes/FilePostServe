// 引入mongoose模块
const mongoose = require('mongoose');

// 连接数据库

// 本地
const path = 'mongodb://FilePost:123456@127.0.0.1:27017/FilePost?authSource=FilePost'
// 线上
// const path = 'mongodb://FilePost:123456@81.70.195.99:27017/FilePost?authSource=FilePost'

mongoose.connect(path).then(
    () => {
        console.log('数据库连接成功啦( =•ω•= )')
    },
    err => {
        console.log('数据库连接失败了(°ー°〃)')
    }
)