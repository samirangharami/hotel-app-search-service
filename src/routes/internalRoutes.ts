import { Hono } from "hono";
import { HotelController } from "../controllers/hotelController.ts";
import { internalAuth } from "../middleware/internalAuth.ts";

const router = new Hono();

router.use("*", internalAuth);

router.post("/hotels/reserve", HotelController.reserve);

export default router;