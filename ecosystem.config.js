module.exports = {
  apps: [
    {
      name: "nuxt-app",
      watch: true,
      instances: 0,
      script: "./server/index.js",
      exec_mode: "cluster",
      restart_delay: 2000,
      min_uptime: "120s",
      max_restarts: 10,
      ignore_watch: ["node_modules"],
      env: {
        NODE_ENV: "production"
      },
      env_production: {},
      log_date_format: "YYYY/MM/DD HH:mm:ss",
      error_file: "./logs/error.log",
      out_file: "./logs/out.log"
    }
  ],
  deploy: {
    production: {}
  }
};
