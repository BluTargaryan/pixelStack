import express from "express";
import User from "../../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/profile", async (req, res) => {
    const token = await req.cookies.token;
    if (!token) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized"
        });
    }
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);

        const user = await User.findById(decoded.id);
        console.log('User:', user);
        
        if (!user) {
            return res.status(404).json({
                message: "Profile not found"
            });
        }
        res.status(200).json({
            message: "Profile found",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                createdAt: user.createdAt
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "Profile not found",
            error: error.message
        }).end();
    }
});

export default router;