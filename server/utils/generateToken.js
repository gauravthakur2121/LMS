import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d", // Token expiry time
  });

  res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: true, // Prevent access via JavaScript
      sameSite: "strict", // CSRF protection
      secure: process.env.NODE_ENV === "production", // Send over HTTPS in production
      maxAge: 24 * 60 * 60 * 1000, // Cookie expiry: 1 day
    })
    .json({
      success: true,
      message,
      user,
    });
};
