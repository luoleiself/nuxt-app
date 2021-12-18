// const CompressionPlugin = require("compression-webpack-plugin"); // gzip 压缩

module.exports = {
  mode: "universal",
  env: {},
  /*
   ** Headers of the page
   *  参考 https://vue-meta.nuxtjs.org/api/#metainfo-properties
   *
   */
  head: {
    title: process.env.npm_package_name || "",
    titleTemplate: "Hello - %s",
    meta: [
      { charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/theme-chalk/index.css"
      // }
    ],
    style: []
    // script: [
    //   {
    //     type: "text/application",
    //     src: "https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js",
    //     async: true,
    //   }
    // ]
    // htmlAttrs: {},
    // headAttrs: {},
    // bodyAttrs: {},
    // changed(newInfo, addedTags, removedTags) {}
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
    { src: "~/plugins/element-ui" },
    "~/plugins/vue-inject.js",
    "~/plugins/combined-inject.js", // client and server inject
    {
      src: "~/plugins/ctx-inject.js",
      mode: "client" /* ssr:true */ /* 过渡为 mode 参数, // 2.4 新增 */
    },
    "~/plugins/highInject.client.js", // client side plugin
    "~/plugins/highInject.server.js", // server side plugin
    "~/plugins/highInject.js"
  ],
  /**
   * 服务器端渲染中间件
   */
  serverMiddleware: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ["~/modules/simple", { name: "hello world", age: 18 }], // 自定义模式
    [
      "@nuxtjs/axios",
      {
        credentials: true,
        retry: { retries: 3 },
        prefix: "/api",
        proxy: true // 此处开启 加载 @nuxtjs/proxy 模块
      }
    ], // axios 配置项可写在 modules 内或者和 modules 平级
    ["@nuxtjs/component-cache", { maxAge: 1000 * 60 * 60 }], // Caching Components
    "@nuxtjs/style-resources" // 全局css变量,混入,方法自动导入模块，styleResources 配置项不能放在此处，会报错!
  ],
  /**
   * @nuxtjs/style-resources 在 build 内的 styleResources 配置项已废弃.
   */
  styleResources: {
    scss: ["./assets/css/vars/*.scss", "./assets/css/mixin/*.scss"]
  },
  // proxy 必须在此处配置, @nuxtjs/proxy 模块内部会判断是否有此配置项
  proxy: {
    /**
     * proxy 和 axios baseURL 不能同时使用
     * 如果使用 proxy 时,需要使用 prefix 代替 baseURL
     */
    "/api/": {
      target: "http://localhost:6000",
      pathRewrite: {
        changeOrigin: true,
        "^/api": ""
      }
    }
  },
  render: {
    /**
     * 自定义渲染页面的运行时选项
     */
    dist: {
      maxAge: "1w", // 浏览器端缓存时间
      setHeaders(res, path, stat) {
        res.setHeader("Via", "Nuxt.js Server-Side Rendering");
      }
    }
  },
  /**
   * 构建默认目录，注释为默认值
   */
  // buildDir: ".nuxt",
  /*
   ** Build configuration
   */
  build: {
    /**
     *  extract-css-chunks-webpack-plugin
     *  default: false, 所有样式文件全部写入页面头部
     *           true,  抽取公用css到单独的css文件中自动注入模板
     */
    // publicPath: "_nuxt",
    extractCSS: true,
    optimizeCSS: true, // when extractCSS is enabled.
    terser: true,
    // parallel: true,
    // postcss: {},
    /**
     * ES6 插件
     */
    transpile: [/^element-ui/],
    plugins: [
      // new CompressionPlugin({
      //   test: /\.js$|\.html$|\.css$/,
      //   exclude: ["node_modules"],
      //   threshold: 8192
      // })
    ],
    optimization: {
      splitChunks: {
        automaticNameDelimiter: "~",
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        // console.log(config);
      }
    }
  },
  /**
   *  nuxt generate 静态文件生成配置项
   */
  generate: {
    /**
     * 生成的目录名称, 默认 dist
     */
    // dir: "dist",
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
    // mode: 'history',
    base: "/", // 根路径 default '/'
    routeNameSplitter: "/", // 路径分隔符 default '-'
    // linkActiveClass: 'nuxt-link-active', // 活动类名
    // linkExactActiveClass: "nuxt-link-exact-active", // default "nuxt-link-exact-active"
    // linkPrefetchedClass: 'nuxt-link-prefetched', // default false
    // extendRoutes: function(routes, resolve){}, // 扩展 nuxtJs 创建的路由
    // parseQuery/stringifyQuery: function(){}, // 格式化参数
    // scrollBehavior: function(to, from, savedPosition){}, // 跳转后目标页面滚动位置
    // prefetchLinks: true, // 配置代码分割页面, default true
    // fallback: false, // default false // 当 mode 为 history，浏览器不支持 history.pushState 时是否应回退
    middleware: [] // 每个页面的中间件 string / array
  },
  /**
   * 应用程序服务器配置项
   */
  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 3000,
    timing: true
  }
};
