import "./bootstrap";
import "reflect-metadata";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import * as Sentry from "@sentry/node";
import AppError from "./error/AppError";
import { logger } from "./util/logger";

import conn from "./database"

Sentry.init({ dsn: process.env.SENTRY_DSN });
const app = express();

app.use(express.json());

app.use(Sentry.Handlers.errorHandler());

app.use(cors());

conn.authenticate().then(() => logger.info("DATABASE ONLINE")).catch((err) => {
  console.warn("Não foi possível conectar ao banco")
  logger.error(err);
})


app.use(async (err: Error, req: Request, res: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      logger.warn(err);
      return res.status(err.statusCode).json({ error: err.message });
    }
  
    logger.error(err);
    return res.status(500).json({ error: "Internal server error" });
  });
  
  export default app;