---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  //name: '<div style="display: flex; align-items: center; justify-content: center; gap: 1rem;"><img src="/logo.png" alt="logo" style="width: 60px; height: 60px;">合租拼车第一站</div>'
  name: '合租拼车第一站'
  text: ""
  tagline: 想看Netflix、用Office 365，又觉得官方订阅<span style="color:red">太贵</span>？<br>想找人“拼车”，又怕上当<span style="color:red">“翻车”</span>？<br>别担心，你来对地方了！<br>建这个站就是为了帮你把水搅浑的合租平台看个清楚。<br>所有推荐都基于我的<span style="color:red">真实</span>使用体验。<br>帮你找到<span style="color:red">最靠谱</span>的“车”，安安心心出发！
  
  # --- 这是修改过的部分 ---
  # 确保 image 的配置是正确的对象格式
  image:
    src: /fengmian.png
    alt: Netflix、Office 365等流媒体与办公软件的账号合租拼车服务。
  # --- 修改结束 ---

  actions:
    - theme: brand
      text: 上车必读
      link: /bidu-tuijian
    - theme: alt
      text: 发车攻略
      link: /gongnue-Spotifyjiqiao

features:
  - title: 蜜糖商店
    details: 蜜糖商店到底靠不靠谱？我一个月的真实“卧底”体验报告，告诉你它的优点和需要避开的“坑”。
    link: /mets-shop-review
  - title: 奈飞小铺
    details: 别只看名气！我们测试了奈飞小铺高峰期的观看流畅度和掉线率，用真实体验告诉你它还值不值得上车。
    link: /naifei
  - title: 银河录像局
    details: 合租界的新秀“银河录像局”是惊喜还是惊吓？我们为你全面评测了它的性价比、特色服务和用户体验。
    link: /yinheluxiangju
---

<!-- 在下面添加这个新的 style 块 -->
<style>
/* 调整 VitePress 主页 Hero 图片大小的样式 (强力覆盖版) */
.VPHero.has-image .image-src {
  max-width: 550px !important;   /* 使用 !important 确保覆盖默认样式 */
  max-height: 580px !important;  /* 你可以根据需要调整这个值 */
}
</style>
