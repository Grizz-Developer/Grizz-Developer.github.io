var posts=["2024/05/11/hello-world/","2024/02/06/如何用Hexo搭建个人博客/","2025/02/06/2分钟解决Android Studio下载gradle卡顿/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };