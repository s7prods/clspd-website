import { defineConfig } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'
import { fileURLToPath } from 'url'

const sidebar = getSidebar({ contentRoot: fileURLToPath(import.meta.resolve('../')), contentDirs: ['examples', 'products'], collapsible: true, collapsed: false });
//console.dir(JSON.stringify(sidebar,null,2))
sidebar.push({
  text: 'About',
  link: '/about.md'
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "clspd",
  description: "clspd-website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products/' },
      { text: 'About', link: '/about' },
      //{ text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar,
  },
  vite: {
    plugins: [
    ]
  }
})
