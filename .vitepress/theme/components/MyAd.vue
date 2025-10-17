<template>
  <div class="ad-container">
    <div class="ad-header">
      <svg class="ad-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.499 6.501a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zM9.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM12 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM4.45 14.5A2.5 2.5 0 1 0 2.5 12a2.5 2.5 0 0 0 1.95 2.5zM19.55 14.5a2.5 2.5 0 1 0-1.95-2.5 2.5 2.5 0 0 0 1.95 2.5z"></path></svg>
      <span class="ad-title">精选机场推荐</span>
    </div>
    <div class="ad-body">
      <a
        v-for="(ad, index) in advertisers"
        :key="ad.name"
        :href="ad.linkUrl"
        target="_blank"
        rel="noopener sponsored"
        class="ad-item"
      >
        <img :src="ad.logoUrl" :alt="ad.name" class="ad-logo" />
        <div class="ad-content">
          <p class="ad-name">{{ ad.name }}</p>
          <p class="ad-description">{{ ad.description }}</p>
        </div>
        <div class="ad-cta">
          前往官网 →
        </div>
      </a>
      <!-- 在广告项之间添加分割线 -->
      <div v-if="advertisers.length > 1 && index < advertisers.length - 1" class="ad-divider"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const advertisers = ref([
  {
    name: '99吧机场',
    logoUrl: '/images/guanggao/99ba.png',
    linkUrl: 'https://99bar.pages.dev/#/register?code=M2TJBCnV',
    description: '高性价比之选，适合多设备用户。',
  },
  {
    name: 'FlyBit机场',
    logoUrl: '/images/guanggao/flybit.png',
    linkUrl: 'https://goflybit.pages.dev/#/register?code=ckrpv0zT',
    description: '稳定高速体验，按需使用不浪费。',
  }
])
</script>

<style scoped>
.ad-container {
  margin: 24px 0 32px;
  border-radius: 12px; /* 增加圆角使其更柔和 */
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  overflow: hidden;
  transition: all 0.25s ease;
}
.ad-container:hover {
  border-color: var(--vp-c-brand-soft);
}

.ad-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
}
.ad-icon {
  width: 16px;
  height: 16px;
  color: var(--vp-c-brand-1);
}
.ad-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.ad-body {
  display: flex;
  align-items: stretch;
}

.ad-item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  text-decoration: none !important;
  transition: background-color 0.25s ease;
}
.ad-item:hover {
  background-color: var(--vp-c-bg-alt);
}

.ad-logo {
  /* --- 1. Logo 尺寸已调大 --- */
  width: 44px;
  height: 44px;
  border-radius: 8px;
  object-fit: contain;
}

.ad-content {
  flex: 1;
}
.ad-name {
  font-size: 16px;
  font-weight: 600; /* 加粗名字，增加层次感 */
  color: var(--vp-c-text-1);
  margin: 0;
}
.ad-description {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 4px 0 0;
}

.ad-cta {
  /* --- 2. "前往官网" 已突出显示 --- */
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1); /* 直接使用主题色，非常醒目 */
  transition: all 0.25s ease;
  white-space: nowrap; /* 防止文字换行 */
}
.ad-item:hover .ad-cta {
  opacity: 0.8; /* 悬停时稍微变化，提供反馈 */
}

.ad-divider {
  width: 1px;
  background-color: var(--vp-c-divider);
}

@media (max-width: 768px) {
  .ad-body {
    flex-direction: column;
  }
  .ad-divider {
    height: 1px;
    width: auto;
    margin: 0 16px;
  }
}
</style>