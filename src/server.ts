import gracefulShutdown from "http-graceful-shutdown";
import app from "./app";
import { logger } from "./util/logger";

const server = app.listen(process.env.PORT, async () => {
    // const companies = await Company.findAll();
    // const allPromises: any[] = [];
    // companies.map(async c => {
    //   const promise = StartAllWhatsAppsSessions(c.id);
    //   allPromises.push(promise);
    // });
  
    // Promise.all(allPromises).then(() => {
    //   startQueueProcess();
    // });
    logger.info(`SERVER INICIADO EM: ${process.env.PORT}`);
  });

gracefulShutdown(server);