import "dotenv/config";

import app from "./src/app.ts";

const port = Number(Deno.env.get("PORT") || 3001);

Deno.serve({ port }, app.fetch);

console.log(`Search service running on port ${port}`);