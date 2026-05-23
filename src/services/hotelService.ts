import { HotelRepository } from "../repositories/hotelRepository.ts";
import { CacheService } from "./cacheService.ts";

export const HotelService = {
  async searchHotels(city: string) {
    const cacheKey = `hotels:${city}`;

    const cached = await CacheService.get(cacheKey);

    if (cached) {
      return JSON.parse(cached);
    }

    const hotels = await HotelRepository.findByCity(city);

    await CacheService.set(cacheKey, JSON.stringify(hotels));

    return hotels;
  },

  async reserveHotel(hotelId: string, rooms: number) {
    const result = await HotelRepository.decrementRooms(hotelId, rooms);

    return result.modifiedCount > 0;
  },
};
