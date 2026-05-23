import { Hono } from "hono";
import { HotelController } from "../controllers/hotelController.ts";

const router = new Hono();

router.get("/hotels", HotelController.search);

export default router;