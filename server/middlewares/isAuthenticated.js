import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token; // Match cookie name

    console.log("Token:", token); // 
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const decode =  await jwt.verify(token, process.env.SECRET_KEY);
    console.log("Decoded token:", decode);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
    console.error("JWT verification failed:", error);
  }
};
export default isAuthenticated;