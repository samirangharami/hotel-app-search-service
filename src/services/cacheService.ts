import { redis } from "../config/redis.ts";

const ttl = Number(Deno.env.get("CACHE_TTL") || 60);

export const CacheService = {
  async get(key: string) {
    return await redis.get(key);
  },

  async set(key: string, value: string) {
    return await redis.set(key, value, {
      EX: ttl,
    });
  },

  async del(key: string) {
    return await redis.del(key);
  },
};
