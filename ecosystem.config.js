module.exports = {
  apps: [
    {
      name: 'loclink-cms-koa',
      script: './dist/main.js',
      cwd: './',
      watch: true,
      ignore_watch: ['logs', 'src/public', '.git'],
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
