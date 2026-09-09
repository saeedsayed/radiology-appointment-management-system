import { type Express } from "express";

export default function v1Routes(app: Express) {
  app.use("/check", (req, res) => {
    res.json({
      status: "success",
    });
  });
}
