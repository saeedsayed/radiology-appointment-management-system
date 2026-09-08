import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

const port = process.env.PORT;
const environment_mode = process.env.ENVIRONMENT_MODE;

app.listen(port, () => {
  if (environment_mode === "development") {
    console.log(`Server is running on port ${port} 🚀`);
  } else {
    console.log(`Server is running 🚀`);
  }
});
