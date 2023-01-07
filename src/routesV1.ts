import express, { Request, Response } from "express";
import { getClient } from "./connection";

const router = express.Router();

const client = getClient();

const collection = client.db("words").collection("words");

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await collection
      .aggregate([
        {
          $sample: { size: 1 },
        },
      ])
      .toArray();
    res.send(result).status(200);
  } catch (error) {
    res.send(error);
  }
});

export { router as routesV1 };
