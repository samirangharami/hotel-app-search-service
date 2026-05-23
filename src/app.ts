import { Hono } from "hono";
import { logger } from "hono/logger";
import publicRoutes from "./routes/publicRoutes.ts";
import internalRoutes from "./routes/internalRoutes.ts";

const app = new Hono();

app.use(logger());
app.route("/api/search", publicRoutes);
app.route("/internal", internalRoutes);

export default app;