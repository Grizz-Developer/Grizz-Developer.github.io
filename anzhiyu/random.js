var posts=["2024/05/11/hello-world/","2025/02/06/如何用Hexo搭建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };