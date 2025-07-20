import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]; // lowercase 'authorization' is correct

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Missing or invalid token" });
    }

    const token = authHeader.split(" ")[1];
    

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Attach decoded payload to req
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export default verifyToken;
