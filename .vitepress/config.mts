// .vitepress/config.mts

import { defineConfig } from 'vitepress'
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'node:stream'

const links: { url: string, lastmod?: number }[] = []
const hostname = 'https://jctest.blog'
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // ... 其他所有配置保持不变 ...
  title: "合影",
  description: "想看Netflix、用Office 365，又觉得官方订阅太贵？想找人“拼车”，又怕上当“翻车”？别担心，你来对地方了！建这个站就是为了帮你把水搅浑的合租平台看个清楚。所有推荐都基于我的真实使用体验，帮你找到最靠谱的“车”，安安心心出发！",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['script', { 
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': '合影',
          'url': 'https://jctest.blog',
          'logo': 'https://jctest.blog/logo.png'
        })
    }]
  ],
  vite: {
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, 'theme')
      }
    }
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/bidu-tuijian' },
	    { text: '神剧推荐', link: '/dianshiju/' },
    ],
    sidebar: {
	  '/': [
		{ text: '上车必读', items: [
			{ text: '【2025主流合租平台终极测评】', link: '/bidu-tuijian' },
			{ text: '蜜糖商店到底靠不靠谱？', link: '/mets-shop-review' },
			{ text: '奈飞小铺值得上吗？', link: '/naifei' },
			{ text: '银河录像局深度评测', link: '/yinheluxiangju' },
		]},
		{ text: '发车攻略', items: [
			{ text: '选择合租平台前必须知道的7件事', link: '/hezuxuanze7' },
			{ text: 'Netflix是什么？', link: '/netflixissm' },
			{ text: 'Netflix翻车怎么办？', link: '/netflixfanche' },
			{ text: '如何修改合租密码', link: '/hezhumima' },
			{ text: 'Spotify入坑完全攻略', link: '/gongnue-Spotifyjiqiao' },
			{ text: 'Spotify隐私保护指南', link: '/gongnue-Spotifyyinsi' },
		]},
	  ],
	  '/dianshiju/': [
		{ text: '神剧推荐指南', items: [
			{ text: 'Netflix 10部不容错过的神作', link: '/dianshiju/netflix-top-10' },
			{ text: '一个账号看遍全球！如何解锁Netflix各国限定神剧？', link: '/dianshiju/netflixkanjutuijian' },
		]}
	  ]
	}, 
    socialLinks: [
       { icon: {svg: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"></path> </g></svg>'}, link: 'https://t.me/mahu_lv' },
    ],
	outlineTitle: '导读'
  },
  
  // =====================【这次真的对了】======================
  // 我们不再信任 pageData.url，而是自己根据 relativePath 构建 URL
  transformPageData(pageData) {
    if (pageData.relativePath.endsWith('.md') && pageData.relativePath !== '404.md') {
      // 1. 从 'bidu-tuijian.md' 变为 'bidu-tuijian'
      // 2. 从 'dianshiju/index.md' 变为 'dianshiju/index'
      const urlPath = pageData.relativePath.replace(/\.md$/, '');
      
      // 3. 处理 index 文件：
      //    'dianshiju/index' -> 'dianshiju/'
      //    'index' -> ''
      const finalPath = urlPath.endsWith('/index') 
        ? urlPath.slice(0, -5) // 'dianshiju/index' -> 'dianshiju/'
        : (urlPath === 'index' ? '' : urlPath); // 'index' -> ''
        
      links.push({
        // 4. 加上域名和开头的斜杠
        url: `/${finalPath}`,
        lastmod: pageData.lastUpdated,
      });
    }
  },

  buildEnd: async ({ outDir }) => {
    console.log(`Found ${links.length} links to generate sitemap.`);
    
    if (links.length === 0) {
      console.warn('⚠️ No links found, skipping sitemap generation.');
      return;
    }

    const sitemapStream = new SitemapStream({ hostname });
    const sitemap = await streamToPromise(
      Readable.from(links).pipe(sitemapStream)
    ).then((data) => data.toString());
    
    writeFileSync(path.resolve(outDir, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated!');
  },
  // =========================================================
})