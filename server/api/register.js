import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
    res.json({ message: "Register endpoint" });
});

export default router;