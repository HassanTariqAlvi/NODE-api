module.exports = {
  apps: [{
    name: "backend",
    script: "./index.js",
    instances: 4,
    autorestart: true,
    watch: true,
    max_memory_restart: "1G"
  }]
};
