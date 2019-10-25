//app.js 服务器端程序
/*1、下载三个模块
cors 完成跨域处理
express-session session对象
mysql 数据库驱动
express web服务器
下载命令在线
npm i cors express-session express*/
// 2、将以上四个模块引入到当前程序
const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const session = require("express-session")
// 3、创建数据库连接池（池 提高效率）
var pool = mysql.createPool({
    host:"127.0.0.1",//数据库地址
    user:"root",//数据库用户名
    password:"",//数据库密码
    port:3306,//数据库端口
    database:"cmusic",//库名
    connectionLimit:15//15个连接
})
// 4、配置跨域模块
//   允许哪个查询跨域访问服务器
//   脚手架：8080
//   服务器：4000
var server = express();
server.use(cors({
    //允许程序列表
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true//每次请求需要验证
}))
// 5、配置session模块
server.use(session({
    secret:"128位字符串",//安全字符串
    resave:true,//请求时更新数据
    saveUninitialized:true//保存初始数据
}));
// 6、配置项目静态目录 public
server.use(express.static("img"));
// 7、创建express对象绑定4000端口
server.listen(4000);

// 8、功能一:歌手详情列表
server.get("/detaSingerSong",(req,res)=>{
    // (2)创建sql语句
    var sql = "SELECT * FROM song where singid=11";
    // (3)执行sql语句
    pool.query(sql,(err,result)=>{
        // (4)获取执行结果
        if(err)throw err;
        // console.log(result);
        res.send(result);
    })   
    })
server.get("/detaSingerSinger",(req,res)=>{
    // (2)创建sql语句
    var sql = "SELECT * FROM singer where gid=11";
    // (3)执行sql语句
    pool.query(sql,(err,result)=>{
        // (4)获取执行结果
        if(err)throw err;
        console.log(result);
        res.send(result);
    })   
    })
// 9、歌单详情列表
server.get("/detaPackName",(req,res)=>{
    var sql="SELECT * FROM songlist where lid=1";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
server.get("/detaPackSong",(req,res)=>{
    // (2)创建sql语句
    var sql = "SELECT * FROM song where lid=1";
    // (3)执行sql语句
    pool.query(sql,(err,result)=>{
        // (4)获取执行结果
        if(err)throw err;
        // console.log(result);
        res.send(result);
    })   
    })
//10\