const Redis = require("ioredis");
require("dotenv").config();

const redis = new Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379
});

redis.on("connect", () => console.log("✅ Redis Connected!"));
redis.on("error", (err) => console.error("❌ Redis Connection Failed:", err));

module.exports = redis;
