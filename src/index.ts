import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { configDotenv } from "dotenv";
import type appError from "./utils/app-error.utils.js";
import STATUS from "./constants/http-status.constant.js";
import { connectDB } from "./utils/db.utils.js";

configDotenv();

await connectDB();

const app = express();

const port = process.env.PORT;
const environment_mode = process.env.ENVIRONMENT_MODE;

app.use(express.json());

// handle error globally
app.use(
  (err: typeof appError, req: Request, res: Response, next: NextFunction) => {
    console.log("err", err);
    if (err.code === 11000) {
      res.status(400).json({
        status: STATUS.ERROR,
        message: `you duplicate a uniq value db err message => ${err.errorResponse.errmsg}`,
        code: 400,
        data: err.keyValue,
      });
    }
    res.status(err.code || 500).json({
      status: err.status || "error",
      message: err.message || "internal server error",
      code: err.code,
      data: err.data,
    });
  },
);

app.listen(port, () => {
  if (environment_mode === "development") {
    console.log(`Server is running on port ${port} 🚀`);
  } else {
    console.log(`Server is running 🚀`);
  }
});
