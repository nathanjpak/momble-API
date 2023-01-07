import { MongoClient } from "mongodb";

import { MONGO_URL } from "./config/config";

const client = new MongoClient(MONGO_URL, {
  retryWrites: true,
  w: "majority",
});

const init = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log(error);
  }
};

const getClient = () => {
  return client;
};

export { init, getClient };
