import express from "express";
import multer from "multer";
import fs from "fs";

const router = express.Router();

const storage = multer({ dest: "uploads/" });

router.post("/createPost", storage.single('file'), async (req, res) => {
    try {
        const { title, description } = req.body;
        const file = req.file;
        const post = {
            title,
            description,
            file: {
                data: fs.readFileSync(file.path),
                contentType: file.mimetype
            }
        }
        res.status(200).json({
            status: 200,
            message: "Post created",
            post
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 400,
            message: "Post creation failed",
            error: error.message
        }).end();
    }
});

export default router;