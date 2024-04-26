import express from "express";
import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "./uploadthing";

export const apiRouter = express();

apiRouter.use(
  "/uploadthing",
  createRouteHandler({
    router: uploadRouter,
    config: {},
  })
);
