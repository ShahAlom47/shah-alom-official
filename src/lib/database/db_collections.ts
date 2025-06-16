import { Collection, Db } from "mongodb";
import clientPromise from "./db_connection";
import { Users } from "../interfaces/usersInterfaces/userInterfaces";


// Define the User type (you can extend it as needed)


export const getUserCollection = async (): Promise<Collection<Users>> => {
  const client = await clientPromise;
  const db: Db = client.db("shah-alom-official"); // Replace with your database name
  return db.collection<Users>("users");
};
