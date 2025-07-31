import { Formats, JetLogger, LoggerModes } from "jet-logger";

export const logger = new JetLogger(
  (process.env.JET_LOGGER_MODE as LoggerModes) || LoggerModes.File,
  process.env.JET_LOGGER_FILEPATH || undefined,
  undefined,
  undefined,
  Formats.Line
);
