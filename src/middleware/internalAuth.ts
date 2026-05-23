import { Context, Next } from "hono";

export async function internalAuth(c: Context, next: Next) {
  const apiKey = c.req.header("x-internal-api-key");

  if (apiKey !== Deno.env.get("INTERNAL_API_KEY")) {
    return c.json(
      {
        error: "Unauthorized",
      },
      401,
    );
  }

  await next();
}