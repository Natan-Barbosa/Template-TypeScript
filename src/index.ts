import { Application, Request, Response } from "express";
import express from "express";
import morgan from "morgan";
import { hello } from "@/services/test";
import { logger } from "./config/jet.logger.config";

const app: Application = express();
const port = 3000;

app.use(morgan("common"));

app.get("/", (_req: Request, res: Response) => {
  res.send(hello());
});

app.listen(port, () => {
  logger.imp(`Server Is Runing On Port: ${port}`);
});
