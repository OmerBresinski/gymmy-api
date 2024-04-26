import "dotenv/config";
import express from "express";
import cors from "cors";
import { apiRouter } from "./apiRouter";

const app = express();

app.use(cors());
app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
