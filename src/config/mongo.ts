import { MongoClient } from "mongodb";

const mongoUri = Deno.env.get("MONGO_URI")!;
const dbName = Deno.env.get("MONGO_DB")!;

const client = new MongoClient(mongoUri);

await client.connect();

console.log("Connected to MongoDB");

export const db = client.db(dbName);