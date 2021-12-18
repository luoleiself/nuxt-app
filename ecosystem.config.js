module.exports = {
  apps: [
    {
      name: "nuxt-app",
      script: "./server/index.js",
      exec_mode: "cluster",
      instances: 0,
      restart_delay: 2000,
      min_uptime: "120s",
      max_restarts: 10,
      watch: true,
      ignore_watch: ["node_modules"],
      env: {
        HOST: 'localhost',
        PORT: 3000,
        NODE_ENV: "development"
      },
      env_production: {
        HOST: '0.0.0.0',
        PORT: 80,
        NODE_ENV: "production"
      },
      log_date_format: "YYYY/MM/DD HH:mm:ss",
      error_file: "./logs/error.log",
      out_file: "./logs/out.log"
    }
  ],
  deploy: {
    production: {}
  }
};
