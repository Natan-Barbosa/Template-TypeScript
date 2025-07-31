import { Application, Request, Response } from "express";
import express from "express";
import morgan from "morgan";
import { hello } from "@/services/test";

const app: Application = express();
const port = 3000;

app.use(morgan("common"));

app.get("/", (_req: Request, res: Response) => {
  res.send(hello());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
