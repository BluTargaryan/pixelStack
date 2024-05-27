import express from "express";
import User from "../../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const checkMail = await User.findOne({ email });
        if (checkMail) {
            return res.status(400).json({ error: "Email Already Exists!!" });
        }
        const hashPass = await bcrypt.hash(password, 12);
        const userDetails = new User({
            firstName,
            lastName,
            email,
            password: hashPass
        });
        await userDetails.save();
        res.status(200).json({ 
            message: "User registered successfully", 
            user: {
                id: userDetails._id,
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                email: userDetails.email,
                createdAt: userDetails.createdAt
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "Registration failed",
            error: error.message
        }).end();
    }
});

export default router;