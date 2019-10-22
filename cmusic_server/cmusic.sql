#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS cmusic;
#创建数据库，设置编码
CREATE DATABASE cmusic CHARSET=UTF8;
#进入创建的数据库
USE cmusic;

#创建数据库表
#用户表
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(20) NOT NULL,
  upwd VARCHAR(20) NOT NULL,
  userName VARCHAR(20),
  phone VARCHAR(11)
);

#轮播图表
CREATE TABLE carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  sid INT,
  cpic VARCHAR(255) 
);

INSERT INTO carousel VALUES
(null,1,"img/carousel/carousel1.jpg"),
(null,2,"img/carousel/carousel2.jpg"),
(null,3,"img/carousel/carousel3.jpg"),
(null,4,"img/carousel/carousel4.jpg");


#歌单表
CREATE TABLE songlist(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  linfo VARCHAR(255),
  listpic VARCHAR(255),
  lnum INT
);

INSERT INTO songlist VALUES
(null,"[华语速爆新歌] 最新华语音乐推荐","img/songlist/songlist1.jpg",62052),
(null,"学习太枯燥，为它加点“糖”","img/songlist/songlist2.jpg",18),
(null,"世界它太小，小到容不下爱人的心","img/songlist/songlist3.jpg",246),
(null,"经典老歌，久听不厌","img/songlist/songlist4.jpg",13027),
(null,"评论过万的英文歌与潜力股","img/songlist/songlist5.jpg",8398),
(null,"百首良曲|刷（抄）作业必备燃曲","img/songlist/songlist6.jpg",11688),
(null,"怀旧 | 闲暇细数90后的回忆杀","img/songlist/songlist7.jpg",7155),
(null,"『好听的翻唱Cover集』","img/songlist/songlist8.jpg",12424),
(null,"你会爱上这个流行华语歌单","img/songlist/songlist9.jpg",3147),
(null,"欧美精选 | 嗨 伙计 要来首10w+吗?","img/songlist/songlist10.jpg",5761),
(null,"网络流行歌曲2019♡","img/songlist/songlist11.jpg",4337),
(null,"华语百首 | 回忆伤人无声，唱不尽世间遗憾","img/songlist/songlist12.jpg",13566),
(null,"[旋律控] 超级好听的欧美良曲","img/songlist/songlist13.jpg",30652),
(null,"确认过旋律，是独处一人的模式","img/songlist/songlist14.jpg",356),
(null,"欧美 | 前奏跪 × 开口脆","img/songlist/songlist15.jpg",5281);


#排行表
CREATE TABLE rank(
  rid INT PRIMARY KEY AUTO_INCREMENT,
  rtitle VARCHAR(255),
  rpic VARCHAR(255)
);

INSERT INTO rank VALUES
(null,"云音乐国电榜","img/rank/rank1.jpg"),
(null,"云音乐说唱榜","img/rank/rank2.jpg"),
(null,"云音乐新歌榜","img/rank/rank3.jpg"),
(null,"云音乐ACG音乐榜","img/rank/rank4.jpg"),
(null,"网易原创歌曲榜","img/rank/rank5.jpg"),
(null,"云音乐热歌榜","img/rank/rank6.jpg"),
(null,"云音乐飙升榜","img/rank/rank7.jpg");


#详细排行表
CREATE TABLE rankdetail(
  id INT PRIMARY KEY AUTO_INCREMENT,
  sid INT,
  rid INT ,
  place INT
);


#歌曲表
CREATE TABLE song(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  songName VARCHAR(100),
  gid INT,
  spic VARCHAR(255),
  lyric VARCHAR(255),
  song VARCHAR(255),
  lid INT
);


#歌手表
CREATE TABLE singer(
  gid INT PRIMARY KEY AUTO_INCREMENT,
  gname VARCHAR(100),
  gpic VARCHAR(255),
  pinyin VARCHAR(5)
);

INSERT INTO singer VALUES
(null,"Alan Walker","img/singer/singer1.jpg","A"),
(null,"A-Lin","img/singer/singer2.jpg","A"),
(null,"宝石gem","img/singer/singer3.jpg","B"),
(null,"Beyond","img/singer/singer4.jpg","B"),
(null,"陈奕迅","img/singer/singer5.jpg","C"),
(null,"陈粒","img/singer/singer6.jpg","C"),
(null,"陈雪凝","img/singer/singer7.jpg","C"),
(null,"等什么君","img/singer/singer8.jpg","D"),
(null,"Ed Sheeran","img/singer/singer9.jpg","E"),
(null,"福克斯","img/singer/singer10.jpg","F"),
(null,"G.E.M.邓紫棋","img/singer/singer11.jpg","G"),
(null,"华晨宇","img/singer/singer12.jpg","H"),
(null,"IU","img/singer/singer13.jpg","I"),
(null,"Justin Bieber","img/singer/singer14.jpg","J"),
(null,"枯木逢春","img/singer/singer15.jpg","K"),
(null,"林俊杰","img/singer/singer16.jpg","L"),
(null,"米津玄師","img/singer/singer17.jpg","M"),
(null,"潘玮柏","img/singer/singer18.jpg","P"),
(null,"任然","img/singer/singer19.jpg","R"),
(null,"孙燕姿","img/singer/singer20.jpg","S"),
(null,"田馥甄","img/singer/singer21.jpg","T"),
(null,"王菲","img/singer/singer22.jpg","W"),
(null,"薛之谦","img/singer/singer23.jpg","X"),
(null,"杨千嬅","img/singer/singer24.jpg","Y"),
(null,"赵方婧","img/singer/singer25.jpg","Z"),
(null,"张学友","img/singer/singer26.jpg","Z"),
(null,"周思涵","img/singer/singer27.jpg","Z"),
(null,"张国荣","img/singer/singer28.jpg","Z"),
(null,"赵雷","img/singer/singer29.jpg","Z"),
(null,"张杰","img/singer/singer30.jpg","Z"),
(null,"张敬轩","img/singer/singer31.jpg","Z");

#热门搜索表
CREATE TABLE hot(
  id INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(100)
);

INSERT INTO hot VALUES
(null,"我和我的祖国"),
(null,"华晨宇"),
(null,"野狼disco"),
(null,"Walk On Water"),
(null,"对的时间点");

#搜索历史表
CREATE TABLE search(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  content VARCHAR(100) 
);

#播放列表(用户单独的播放表)
CREATE TABLE playlist(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  sid INT
);

#收藏表
CREATE TABLE collect(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  sid INT
);

#最近播放表
CREATE TABLE recently(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  sid INT
);
