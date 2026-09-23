import Z from "zod";

export const registerSchema = Z.object({
  username: Z.string("Username is required").min(
    3,
    "Username must be at least 3 characters",
  ),
  password: Z.string("Password is required").min(
    6,
    "Password must be at least 6 characters",
  ),
});

export const loginSchema = Z.object({
  username: Z.string("Username is required"),
  password: Z.string("Password is required"),
});
