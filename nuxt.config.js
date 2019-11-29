module.exports = {
  mode: "universal",
  env: {},
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#0088ff" },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/axios.js", // transform modules axios to customize plugins
    "~/plugins/element-ui",
    "~/plugins/vue-inject.js",
    "~/plugins/combined-inject.js", // client and server inject
    {
      src: "~/plugins/ctx-inject.js",
      ssr: true /* 过渡为 mode 参数 */ /* mode:'server', // 2.4 新增 */
    },
    "~/plugins/highInject.client.js", // client side plugin
    "~/plugins/highInject.server.js", // server side plugin
    "~/plugins/highInject.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    // host: "www.xcar.com.cn",
    // port: 80
  },
  /*
   ** Build configuration
   */
  build: {
    analyze: false, // 可视化打包分析工具
    /**
     *  extract-css-chunks-webpack-plugin
     *  default: false, 所有样式文件全部写入页面头部
     *           true,  抽取公用css到单独的css文件中自动注入模板
     */
    // extractCSS: true,
    // optimizeCSS: true, // when extractCSS is enabled.
    /**
     * ES6 插件
     */
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      console.log(config, ctx);
    }
  },
  /**
   *  nuxt generate 静态文件生成配置项
   */
  generate: {
    /**
     * 生成的目录名称, 默认 dist
     */
    dir: "dist",
    /**
     * 动态路由参数配置项
     */
    // eg1: 静态文件动态参数,
    routes: [],
    // eg2: 返回 promise
    routes() {
      return new Promise((resolve, reject) => {
        resolve();
      }).then(() => {
        return [];
      });
    },
    // eg3: 回调函数
    routes(cb) {
      new Promise((resolve, reject) => {
        resolve();
      }).then(() => {
        const routes = [];
        cb(null, routes);
      });
    }
  },
  /**
   * 构建默认目录，注释为默认值
   */
  // buildDir: ".nuxt",
  /**
   * nuxt 应用的根目录，注释为默认值
   */
  // rootDir: process.cwd(),
  /**
   * 应用的源码目录，注释为默认值
   */
  // srcDir: rootDir,
  /**
   * 应用程序的自定义目录
   */
  // dir: {},
  /**
   * nuxt 应用路由配置项, 参考 vue-router
   */
  router: {
    /**
     * 应用的每个页面默认的中间件
     */
    middleware: []
  },
  /**
   * 应用程序服务器配置项
   */
  server: {
    port: 3000,
    host: "localhost",
    timing: true
  },
  /**
   * 服务器端渲染中间件
   */
  serverMiddleware: []
};
