module.exports = {
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  title: "Govee生态工具集合",
  description: "打造适合Govee的生态工具链产品",
  base: "/toolchain/",
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text : "首页", link: "/"},
      { text: 'Github', link: "https://github.com/igovee/toolchain" },
    ],
    sidebar: [
      {
        title: "首页", path: "/"
      },
      {
        title: "前言", path: "/handbook/Introduction",  collapsable: false, // 不折叠
        children: [
          { title: "关于项目", path: "/handbook/AboutProject" },
          { title: "Govee工具链", path: "/handbook/ToolChain" },
        ]
      }
    ]
  }
}