// .vitepress/theme/index.ts

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
// 导入评论插件
import GiscusComment from './components/GiscusComment.vue' 
//导入广告插件
import MyAd from './components/MyAd.vue'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
		// 在文章内容的上方，标题的下方插入广告组件
      'doc-before': () => h(MyAd),
      'doc-after': () => h(GiscusComment)
    })
  }
} satisfies Theme