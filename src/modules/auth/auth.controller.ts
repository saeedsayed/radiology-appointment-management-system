import jwt from "jsonwebtoken";
import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import Users from "./auth.model.js";

function generateToken(userId: string, username: string): string {
  const JWT_SECRET = process.env.JWT_SECRET!;
  return jwt.sign({ id: userId, username }, JWT_SECRET, { expiresIn: "7d" });
}

// ===========================================================

export const registerController = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await Users.findOne({ username });
  if (existingUser) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Username already exists"));
  }

  const user = await Users.create({ username, password });
  const token = generateToken(user._id.toString(), user.username!);

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { token, user: { id: user._id, username: user.username } },
        "Registration successful",
      ),
    );
});

// ===========================================================

export const loginController = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ username });
  if (!user) {
    return res
      .status(401)
      .json(new ApiResponse(401, null, "Invalid credentials"));
  }

  const isMatch = await (user as any).comparePassword(password);
  if (!isMatch) {
    return res
      .status(401)
      .json(new ApiResponse(401, null, "Invalid credentials"));
  }

  const token = generateToken(user._id.toString(), user.username!);

  res.json(
    new ApiResponse(
      200,
      { token, user: { id: user._id, username: user.username } },
      "Login successful",
    ),
  );
});
