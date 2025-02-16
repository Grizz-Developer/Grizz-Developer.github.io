var posts=["2024/05/10/hello-world/","2024/05/16/如何用Hexo搭建个人博客/","2024/05/20/2分钟解决Android Studio下载gradle卡顿/","2024/06/07/Android Studio配置Gradle国内阿里开源镜像站/","2025/02/16/Android四大组件/","2025/02/16/如何理解MVC、MVP、MVVM？他们的区别是什么？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };