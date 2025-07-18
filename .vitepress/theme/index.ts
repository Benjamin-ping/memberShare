// .vitepress/theme/index.ts

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
// 【重要】因为 index.ts 和 components 是同级，所以路径是 './components/...'
import GiscusComment from './components/GiscusComment.vue' 

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(GiscusComment)
    })
  }
} satisfies Theme