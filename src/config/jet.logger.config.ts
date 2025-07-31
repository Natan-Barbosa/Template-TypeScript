import { Formats, JetLogger, LoggerModes } from "jet-logger";
import * as dotenv from "dotenv";
import { rootPath } from "root.path.config";

dotenv.config();
const enviroment = process.env.NODE_ENV;
dotenv.config({ path: `${rootPath}/EnvConfig/.env.${enviroment}` });

export const logger = new JetLogger(
  (process.env.JET_LOGGER_MODE as LoggerModes) || LoggerModes.Console,
  process.env.JET_LOGGER_FILEPATH || undefined,
  undefined,
  undefined,
  Formats.Line
);
