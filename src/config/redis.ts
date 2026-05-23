import { createClient } from "redis";

const host = Deno.env.get("REDIS_HOST")!;
const port = Number(Deno.env.get("REDIS_PORT")!);

export const redis = createClient({
  socket: {
    host,
    port,
  },
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});

redis.on("error", (err:any) => {
  console.error("Redis Error:", err);
});

await redis.connect();