import express, { Request, Response } from "express";

import { init } from "./connection";
import { routesV1 } from "./routesV1";

const PORT = 7174;

const app = express();

app.use(express.json());

(async () => {
  init();

  app.listen(PORT, () => {
    console.log(`Server is connected at localhost ${PORT}`);
  });

  app.use("/api/v1", routesV1);

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello!");
  });
})();
