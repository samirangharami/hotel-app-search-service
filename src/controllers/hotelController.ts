import { Context } from "hono";
import { HotelService } from "../services/hotelService.ts";

export const HotelController = {
  async search(c: Context) {
    const city = c.req.query("city");

    if (!city) {
      return c.json({ error: "city query required" }, 400);
    }

    const hotels = await HotelService.searchHotels(city);

    return c.json(hotels);
  },

  async reserve(c: Context) {
    const body = await c.req.json();

    const success = await HotelService.reserveHotel(
      body.hotelId,
      body.rooms,
    );

    if (!success) {
      return c.json({ error: "Hotel unavailable" }, 400);
    }

    return c.json({ success: true });
  },
};
