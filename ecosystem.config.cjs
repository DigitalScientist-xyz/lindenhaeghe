/** PM2 ecosystem file – run with: pm2 start ecosystem.config.cjs
 *  Change PORT below if 3010 is in use (e.g. 3020, 3030, 3847). */
module.exports = {
  apps: [
    {
      name: "lindenhaeghe",
      cwd: __dirname,
      script: "node_modules/.bin/next",
      args: "start",
      env: { NODE_ENV: "production", PORT: "3010" },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "400M",
    },
  ],
};
