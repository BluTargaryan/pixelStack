import express from "express";
import User from "../../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "User not found"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                status: 400,
                message: "Invalid credentials"
            });
        }
        res.status(200).json({
            status: 200,
            message: "Login successful",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: "Login failed",
            error: error.message
        }).end();
    }
});

export default router;