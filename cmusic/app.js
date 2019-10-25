//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象,跟sessionStorage有区别
//  mysql           数据库驱动
//  express         web服务器
//下载命令在线  
//npm i cors express-session express  mysql
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
//3:创建数据库连接池(池 提高效率)
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"cmusic",//库名
    connectionLimit:15//15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:3001 允许3001访问我
//  服务器:4000 你
var server = express();
server.use(cors({
  //允许程序列表
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true//每次请求需要验证
}))
//5:配置session模块，在当前会话中保存用户等信息
server.use(session({
   secret:"128位字符串",//安全字符串
   resave:true,//请求时更新数据
   saveUninitialized:true//保存初始数据
}))
//6:配置项目静态目录 public
server.use(express.static("public"))
//7:创建express对象绑定4000端口
server.listen(4000);

//8:功能一:完成用户登录
server.get("/login",(req,res)=>{
//(1)获取脚手架参数 uname upwd
var uname = req.query.uname;
var upwd = req.query.upwd;
//(2)创建sql语句查询
var sql = "SELECT id FROM xz_login WHERE uname = ? AND upwd = md5(?)";
//(3)执行sql语句
pool.query(sql,[uname,upwd],(err,result)=>{
 if(err)throw err;
 //(4)获取执行结果
 //(5)判断查询是否成功 result.length
 if(result.length==0){
   res.send({code:-1,msg:"用户名或密码有误"})
 }else{
   //5.1:保存用户id在session对象中,result数据格式 [{id:1}]
  req.session.uid = result[0].id;
  res.send({code:1,msg:"登录成功"});
 }
})
})


//功能二:获取轮播图
server.get("/carousel",(req,res)=>{
//6:创建sql语句
var sql = "SELECT sid,cpic FROM carousel";
//7:执行sql语句
pool.query(sql,(err,result)=>{
  if(err)throw err;
  res.send({code:1,msg:"查询成功",data:result})
})
})

//测试：http://127.0.0.1:4000/carousel


//功能三:获取推荐歌单
server.get("/recommendList",(req,res)=>{
//6:创建sql语句
var sql = "SELECT linfo,listpic,lnum FROM songlist";
//7:执行sql语句
pool.query(sql,(err,result)=>{
  if(err)throw err;
  res.send({code:1,msg:"查询成功",data:result})
})
})

//测试：http://127.0.0.1:4000/recommendList


//功能四:获取推荐歌曲
server.get("/recommendMusicList",(req,res)=>{
//6:创建sql语句
var sql = "SELECT songName,spic,sid,gname FROM song,singer WHERE song.gid=singer.gid";
//7:执行sql语句
pool.query(sql,(err,result)=>{
  if(err)throw err;
  res.send({code:1,msg:"查询成功",data:result})
})
})

//测试：http://127.0.0.1:4000/recommendMusicList


//功能五:获取排行榜
server.get("/rank",(req,res)=>{
//6:创建sql语句
var sql = "SELECT rpic,sname0,sname1,sname2,uname0,uname1,uname2 FROM rank";
//7:执行sql语句
pool.query(sql,(err,result)=>{
  if(err)throw err;
  res.send({code:1,msg:"查询成功",data:result})
})
})


//功能六:获取详细排行榜
server.get("/rankdetail",(req,res)=>{
//6:创建sql语句
var sql = "SELECT sid,rid,place FROM rankdetail";
//7:执行sql语句
pool.query(sql,(err,result)=>{
  if(err)throw err;
  res.send({code:1,msg:"查询成功",data:result})
})
})


//功能七:获取歌手
server.get("/singers",(req,res)=>{
//6:创建sql语句
var sql = "SELECT gname,gpic,pinyin FROM singer";
//7:执行sql语句
pool.query(sql,(err,result)=>{
  if(err)throw err;
  res.send({code:1,msg:"查询成功",data:result})
})
})



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