import { ObjectId } from "mongodb";
import { db } from "../config/mongo.ts";

const hotels = db.collection("hotels");

export const HotelRepository = {
  async findByCity(city: string) {
    return await hotels.find({ city }).toArray();
  },

  async findById(id: string) {
    return await hotels.findOne({ _id: new ObjectId(id) });
  },

  async decrementRooms(id: string, rooms: number) {
    return await hotels.updateOne(
      { _id: new ObjectId(id), roomsAvailable: { $gte: rooms } },
      { $inc: { roomsAvailable: -rooms } },
    );
  },
};
