#数据库创建
set names utf8;
drop database if exists cmusic;
create database cmusic charset=utf8;
use cmusic;
#用户表
create table user(
    uid int primary key,
    uname varchar(20) unique not null,
    upwd varchar(20) not null,
    userName varchar(20),
    phone varchar(11)
);
#歌曲表
create table songs(
    id int ,
    songName varchar(255),
    singer varchar(20),
    pic varchar(255),
    lyric varchar(255),
    collection varchar(255),
    aid int,
    sid int
);
#歌手信息表
create table singer(
    aid int,
    aname varchar(20),
    pic varchar(255),
    info varchar(255)
);
#歌曲风格表
create table style(
    sid int,
    sname varchar(20),
    pic varchar(255)
);
#歌单列表
create table list(
    lid int,
    lname varchar(255),
    pic varchar(255),
    listen int
);
#播放列表
create table play(
    pid int,
    
);