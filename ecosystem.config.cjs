/** PM2 ecosystem file – run with: pm2 start ecosystem.config.cjs */
module.exports = {
  apps: [
    {
      name: "lindenhaeghe",
      cwd: __dirname,
      script: "node_modules/.bin/next",
      args: "start",
      env: { NODE_ENV: "production" },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "400M",
    },
  ],
};
