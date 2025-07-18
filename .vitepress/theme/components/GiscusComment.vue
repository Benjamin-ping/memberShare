<template>
  <div class="giscus-container" ref="giscusContainer"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useData } from 'vitepress';

const giscusContainer = ref(null);
const { isDark } = useData();

// 这是一个函数，用于加载 Giscus 脚本并初始化
const loadGiscus = () => {
  if (giscusContainer.value) {
    // 清空容器，防止重复加载
    giscusContainer.value.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    
    // =======================================================
    //  重要：请将下面的属性值替换成你在 Giscus 官网生成的值
    // =======================================================
    script.setAttribute('data-repo', 'Benjamin-ping/memberShare'); 
    script.setAttribute('data-repo-id', 'R_kgDOPLSJwg');
    script.setAttribute('data-category', 'memberShareComments');
    script.setAttribute('data-category-id', 'DIC_kwDOPLSJws4CtHVL');
    // =======================================================

    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-lang', 'zh-CN');
    script.setAttribute('crossorigin', 'anonymous');
    // 根据 VitePress 的深色模式状态切换 Giscus 主题
    script.setAttribute('data-theme', isDark.value ? 'dark' : 'light');
    script.async = true;

    giscusContainer.value.appendChild(script);
  }
};

// 组件挂载时加载 Giscus
onMounted(loadGiscus);

// 监听深色模式变化，并重新加载 Giscus 以切换主题
watch(isDark, loadGiscus);
</script>

<style scoped>
.giscus-container {
  margin-top: 2rem;
}
</style>