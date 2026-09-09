import express from "express";
import { configDotenv } from "dotenv";
import { connectDB } from "./utils/db.util.js";
import v1Routes from "./routes/v1.route.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import cors from "cors";

configDotenv();

await connectDB();

const app = express();

const port = process.env.PORT;
const environment_mode = process.env.ENVIRONMENT_MODE;

app.use(cors());

app.use(express.json());

v1Routes(app);

// handle 404 route
app.use((req, res, next) => {
  res
    .status(404)
    .json({ status: "error", message: "route not defined", code: 404 });
});

// handle error globally
app.use(errorHandler);

app.listen(port, () => {
  if (environment_mode === "development") {
    console.log(`Server is running on port ${port} 🚀`);
  } else {
    console.log(`Server is running 🚀`);
  }
});
